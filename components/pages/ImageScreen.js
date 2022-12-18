import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { deleteImage, getImage } from '../../APICalls';
import { IconButton } from 'react-native-paper';

import { ImageScreenStyle } from '../style/ImageScreenStyle';
import { colors } from '../style/Colors';

import { Card, Title, Paragraph } from 'react-native-paper';

export default function ImageScreen({
  navigation: { goBack, navigate },
  route,
}) {
  const [image, setImage] = useState({
    id: route.params.id,
    title: '',
    url: 'https://msbarrons.com/wp-content/uploads/2017/06/maxresdefault.jpg',
    description: '',
    category: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      getImage(image.id)
        .then((res) => JSON.parse(res.data))
        .then((json) => {
          if (json) {
            if (json) {
              setImage(json);
            }
          }
        });
    }, [image.id])
  );

  async function eliminar() {
    await deleteImage(image.id);
    goBack();
  }

  return (
    <View style={ImageScreenStyle.body}>
      <ScrollView>
        <Image
          style={ImageScreenStyle.image}
          source={{
            uri: image.url,
          }}
        />
        <Text style={ImageScreenStyle.title}>{image.title}</Text>
        <Text style={ImageScreenStyle.text}>{image.description}</Text>
        <Text> </Text>
        <Text>Category: </Text>
        <Text style={ImageScreenStyle.text}>{image.category}</Text>
      </ScrollView>
      <View style={ImageScreenStyle.buttons}>
        <IconButton
          icon="pencil"
          mode="contained"
          iconColor={colors.backgroundColor}
          containerColor={colors.primaryColor}
          size={40}
          onPress={() => {
            navigate({
              name: 'Insert/Update',
              params: { image },
            });
          }}
        />
        <IconButton
          icon="delete"
          mode="contained"
          iconColor={colors.backgroundColor}
          containerColor={colors.primaryColor}
          size={40}
          onPress={() => eliminar()}
        />
      </View>
    </View>
  );
}
