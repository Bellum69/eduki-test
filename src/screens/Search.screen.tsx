import { useNavigation } from '@react-navigation/native';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

import { searchItems } from '../api';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { SearchItem } from '../components/SearchItem';
import { Routes } from '../navigation/routes';
import { RootStackProps } from '../navigation/types';
import { ResponseItem } from '../types';

export const SearchScreen = () => {
  const navigation = useNavigation<RootStackProps>();

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(true);
  const [items, setItems] = useState<ResponseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadItems = async (q, p) => {
    if (loading || refreshing || !q || !isPageLoaded) {
      return;
    }
    setIsPageLoaded(false);
    setLoading(true);
    try {
      const responseItems = await searchItems(q, p);
      setItems(p === 1 ? responseItems : [...items, ...responseItems]);
      setLoading(false);
      setIsPageLoaded(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setIsPageLoaded(true);
    }
  };

  const debouncedLoadItems = useCallback(
    debounce((q, p) => {
      loadItems(q, p);
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedLoadItems(query, page);
  }, [query, page]);

  const handleEndReached = () => {
    if (isPageLoaded) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setRefreshing(false);
  };

  const navigateToDetails = (item: ResponseItem) => {
    navigation.navigate(Routes.Details, { id: item.id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={(text) => {
          setQuery(text);
          setPage(1);
        }}
        value={query}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <SearchItem item={item} onPress={navigateToDetails} />}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.7}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={() => loading && <LoadingIndicator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  searchInput: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});
