import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { TextInput, IconButton } from 'react-native-paper';
import { insertImage, updateImage } from '../../APICalls';
import { colors } from '../style/Colors';
import { ImageFormStyle } from '../style/ImageFormStyle';

export default function ImageForm({ navigation: { goBack }, route }) {
  const image = route.params.image;

  const [title, setTitle] = useState(image.id !== 0 ? image.title : '');
  const [url, setUrl] = useState(image.id !== 0 ? image.url : '');
  const [description, setDescription] = useState(
    image.id !== 0 ? image.description : ''
  );
  const [category, setCategory] = useState(
    image.id !== 0 ? image.category : ''
  );

  async function insert() {
    await insertImage({ title, url, description, category });
    goBack();
  }

  async function update() {
    await updateImage({ id: image.id, title, url, description, category });
    goBack();
  }

  return (
    <View style={ImageFormStyle.body}>
      <ScrollView>
        <TextInput
          label="Title: "
          mode="outlined"
          value={title}
          onChangeText={(txt) => setTitle(txt)}
        />
        <TextInput
          label="URL: "
          mode="outlined"
          value={url}
          onChangeText={(txt) => setUrl(txt)}
        />
        <TextInput
          label="Description: "
          mode="outlined"
          multiline={true}
          value={description}
          onChangeText={(txt) => setDescription(txt)}
        />
        <TextInput
          label="Category: "
          mode="outlined"
          value={category}
          onChangeText={(txt) => setCategory(txt)}
        />
      </ScrollView>
      <View>
        <IconButton
          style={ImageFormStyle.saveButton}
          icon="content-save"
          mode="contained"
          iconColor={colors.backgroundColor}
          containerColor={colors.primaryColor}
          size={40}
          onPress={() => (image.id !== 0 ? update() : insert())}
        />
      </View>
    </View>
  );
}
