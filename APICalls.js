import RNFetchBlob from 'rn-fetch-blob';

const URL = 'http://192.168.1.33:8080/image';

export function getImages() {
  return RNFetchBlob.config({
    trusty: true,
  }).fetch('GET', URL + '/get');
}

export function getImage(id) {
  return RNFetchBlob.config({
    trusty: true,
  }).fetch('GET', URL + '/get/' + id);
}

export async function insertImagesFromUrl() {
  const images = await fetch('https://internal.ossian.tech/api/Sample')
    .then((res) => res.json())
    .then((json) => {
      if (json) {
        return json.result;
      }
    });

  if (images) {
    images.map((image) => {
      RNFetchBlob.config({
        trusty: true,
      }).fetch(
        'POST',
        URL + '/insert',
        { 'Content-Type': 'application/json' },
        JSON.stringify(image)
      );
    });
  }
}

export function insertImage(image) {
  RNFetchBlob.config({
    trusty: true,
  }).fetch(
    'POST',
    URL + '/insert',
    { 'Content-Type': 'application/json' },
    JSON.stringify(image)
  );
}

export function updateImage(image) {
  RNFetchBlob.config({
    trusty: true,
  }).fetch(
    'PUT',
    URL + '/update/' + image.id,
    { 'Content-Type': 'application/json' },
    JSON.stringify(image)
  );
}

export function deleteImage(id) {
  return RNFetchBlob.config({
    trusty: true,
  }).fetch('DELETE', URL + '/delete/' + id);
}
