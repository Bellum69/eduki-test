import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

import { ResponseItem } from '../types';

interface SearchItemProps {
  item: ResponseItem;
  onPress: (item: ResponseItem) => void;
}

export const SearchItem: FC<SearchItemProps> = ({ item, onPress }) => {
  const handlePress = () => {
    onPress(item);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: item.firstPreviewImage.watermarked }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author.details.publicName}</Text>
      <Text style={styles.price}>{`${item.price} €`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
