import React from 'react';
import { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getImages, insertImagesFromUrl } from '../../APICalls';
import { useFocusEffect } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import { HomeScreenStyle } from '../style/HomeScreenStyle';
import { colors } from '../style/Colors';

export default function HomeScreen({ navigation }) {
  const [images, setImages] = useState([]);

  async function fillDB() {
    await insertImagesFromUrl();
    getImages()
      .then((res) => JSON.parse(res.data))
      .then((json) => (json ? setImages(json) : console.log('F')));
  }

  useFocusEffect(
    React.useCallback(() => {
      getImages()
        .then((res) => JSON.parse(res.data))
        .then((json) => {
          if (json) {
            if (json.length === 0) {
              fillDB();
            } else {
              setImages(json);
            }
          }
        });
    }, [])
  );

  return (
    <View>
      <ScrollView contentContainerStyle={HomeScreenStyle.scroll}>
        <View style={HomeScreenStyle.body}>
          {images.map((img) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Image',
                  params: { id: img.id },
                })
              }
              key={img.id}
            >
              <Image
                style={HomeScreenStyle.imageButton}
                source={{ uri: img.url }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <IconButton
        style={HomeScreenStyle.addButton}
        icon="plus"
        mode="contained"
        iconColor={colors.backgroundColor}
        containerColor={colors.primaryColor}
        size={40}
        onPress={() => {
          navigation.navigate({
            name: 'Insert/Update',
            params: { image: { id: 0 } },
          });
        }}
      />
    </View>
  );
}
