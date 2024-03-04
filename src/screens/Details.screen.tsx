import { RouteProp } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { getItem } from '../api';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { Routes } from '../navigation/routes';
import { RootStackParamList } from '../navigation/types';
import { ResponseItem } from '../types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, Routes.Details>;

type Props = {
  route: DetailsScreenRouteProp;
};

export const DetailsScreen: FC<Props> = ({ route }) => {
  const { id } = route.params;

  const [item, setItem] = useState<ResponseItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadItem = async (id) => {
    setLoading(true);
    try {
      const responseItem = await getItem(id);
      setItem(responseItem);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItem(id);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.screenWrap}>
      <View style={styles.container}>
        {!loading && item ? (
          <>
            <Image source={{ uri: item.firstPreviewImage.watermarked }} style={styles.image} />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author.details.publicName}</Text>
              <Text style={styles.price}>{`${item.price} €`}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </>
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  detailContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
