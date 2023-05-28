import { albumActions } from './album-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

export const createAlbum = (albumData) => async () => {
  const { projectId, coverImg } = albumData;

  try {
    const coverImgId = uuidv4();
    const coverImgName = `${coverImg.name}_${coverImgId}`;

    const storageRef = ref(storage, `/images/album/${coverImgName}`);
    await uploadBytes(storageRef, coverImg);

    const coverImgUrl = await getDownloadURL(storageRef);

    const albumCollection = collection(db, 'project', projectId, 'album');
    const newAlbum = await addDoc(albumCollection, {
      ...albumData,
      coverImg: coverImgUrl,
      photos: [],
      createdAt: new Date().toString(),
    });

    console.log('Album criado com ID: ', newAlbum.id);
  } catch (error) {
    console.log('Erro ao criar projeto: ', error);
  }
};

export const fetchAlbumPhotos = (projectId, albumId) => async (dispatch) => {
  try {
    const albumRef = doc(db, 'project', projectId, 'album', albumId);
    const albumDoc = await getDoc(albumRef);
    const albumData = albumDoc.data();
    console.log('sss', albumData.photos);

    dispatch(albumActions.setPhotos(albumData.photos));
    console.log('Album photos fetched successfully');
  } catch (error) {
    console.error('Error fetching album photos:', error);
  }
};

export const fetchAlbumsByProjectId = (projectIdRef) => async (dispatch) => {
  try {
    const projectRef = doc(db, 'project', projectIdRef);
    const albumCollection = collection(projectRef, 'album');
    const querySnapshot = await getDocs(
      query(albumCollection, orderBy('createdAt'))
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(albumActions.setAlbums(data));
    console.log('fetchAlbums data:', data);
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

export const addAlbumPhotos =
  (projectId, albumId, photos) => async (dispatch) => {
    try {
      const albumRef = doc(db, 'project', projectId, 'album', albumId);
      const albumCollection = await getDoc(albumRef);
      const albumData = albumCollection.data();
      const photoId = uuidv4();

      const photoData = await Promise.all(
        photos.map(async (photo) => {
          const photoName = `${photo.name}_${photoId}`;

          const storageRef = ref(storage, `/images/photo/${photoName}`);
          await uploadBytes(storageRef, photo);
          const downloadUrl = await getDownloadURL(storageRef);

          return {
            id: uuidv4(),
            name: photo.name,
            original: downloadUrl,
            thumbnail: downloadUrl,
          };
        })
      );

      const newPhotos = [...albumData.photos, ...photoData];
      await updateDoc(albumRef, { photos: newPhotos });

      console.log('Fotos adicionadas com sucesso.');
    } catch (error) {
      console.error('Error adding photos:', error);
    }
  };
