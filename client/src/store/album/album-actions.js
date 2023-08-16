import { albumActions } from './album-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

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

export const createAlbum = (albumData) => async () => {
  const { id, title, description, projectId, coverImg } = albumData;
  console.log('albumdata: ', albumData);
  try {
    let imageUrl;

    if (coverImg) {
      const coverImgId = uuidv4();
      const coverImgName = `${coverImg.name}_${coverImgId}`;

      const storageRef = ref(storage, `/images/album/${coverImgName}`);
      await uploadBytes(storageRef, coverImg);

      imageUrl = await getDownloadURL(storageRef);
    }

    if (id) {
      const albumDocRef = doc(db, 'project', projectId, 'album', id);
      const updateData = {
        title,
        description,
        updatedAt: new Date().toString(),
      };

      if (imageUrl !== undefined) {
        updateData.coverImg = imageUrl;
      }
      await updateDoc(albumDocRef, updateData);

      console.log('Album att com sucesso');

      const updatedAlbumDoc = await getDoc(albumDocRef);
      const updatedAlbumData = { id, ...updatedAlbumDoc.data() };

      return updatedAlbumData;
    } else {
      const albumCollection = collection(db, 'project', projectId, 'album');
      const newAlbum = await addDoc(albumCollection, {
        ...albumData,
        coverImg: imageUrl,
        photos: [],
        createdAt: new Date().toString(),
      });

      console.log('Album criado com ID: ', newAlbum.id);

      const newAlbumDoc = await getDoc(doc(albumCollection, newAlbum.id));
      const newAlbumData = { id: newAlbum.id, ...newAlbumDoc.data() };

      return newAlbumData;
    }
  } catch (error) {
    console.log('Erro ao criar album: ', error);
  }
};

export const deleteAlbum = (projectId, albumId) => async (dispatch) => {
  try {
    // Construct the Firestore references for the project and album
    const projectDocRef = doc(db, 'project', projectId);
    const albumDocRef = doc(projectDocRef, 'album', albumId);

    // Delete the album document
    await deleteDoc(albumDocRef);

    // Dispatch an action to update the state and remove the album from the Redux store
    dispatch(albumActions.deleteAlbum(albumId));

    console.log('Album deleted successfully!');
  } catch (error) {
    console.log('Error deleting album: ', error);
  }
};

export const fetchAlbumPhotos = (projectId, albumId) => async (dispatch) => {
  try {
    const albumRef = doc(db, 'project', projectId, 'album', albumId);
    const albumDoc = await getDoc(albumRef);
    const albumData = albumDoc.data();

    dispatch(albumActions.setPhotos(albumData.photos));
    console.log('Album photos fetched successfully');
  } catch (error) {
    console.error('Error fetching album photos:', error);
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
