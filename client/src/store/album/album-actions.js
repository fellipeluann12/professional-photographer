import { albumActions } from './album-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
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

  try {
    let imageInfo = null;

    if (coverImg) {
      const coverImgId = uuidv4();
      const coverImgName = `${coverImg.name}_${coverImgId}`;

      const storageRef = ref(storage, `/images/album/${coverImgName}`);
      await uploadBytes(storageRef, coverImg);

      const imageUrl = await getDownloadURL(storageRef);

      imageInfo = {
        url: imageUrl,
        name: coverImgName,
      };
    }

    const albumCollection = collection(db, 'project', projectId, 'album');

    if (id) {
      const albumDocRef = doc(albumCollection, id);
      const updateData = {
        title,
        description,
        updatedAt: new Date().toString(),
      };

      if (imageInfo) {
        updateData.coverImg = imageInfo;
      }
      await updateDoc(albumDocRef, updateData);

      console.log('Album updated successfully');

      const updatedAlbumDoc = await getDoc(albumDocRef);
      const updatedAlbumData = { id, ...updatedAlbumDoc.data() };

      return updatedAlbumData;
    } else {
      const newAlbum = await addDoc(albumCollection, {
        ...albumData,
        coverImg: imageInfo,
        photos: [],
        createdAt: new Date().toString(),
      });

      console.log('Album created with ID: ', newAlbum.id);

      const newAlbumDoc = await getDoc(doc(albumCollection, newAlbum.id));
      const newAlbumData = { id: newAlbum.id, ...newAlbumDoc.data() };

      return newAlbumData;
    }
  } catch (error) {
    console.log('Error creating album: ', error);
  }
};

export const deleteImageFunction = async (coverImg) => {
  console.log('nameImgDeleteImage:', coverImg.name);
  const storageImgRef = ref(storage, `/images/album/${coverImg.name}`);

  deleteObject(storageImgRef)
    .then(() => {
      console.log('deletou');
    })
    .catch((error) => {
      console.log('deu erro', error);
    });
};

export const deleteAlbum =
  (projectId, albumId, coverImg) => async (dispatch) => {
    try {
      const projectDocRef = doc(db, 'project', projectId);
      const albumDocRef = doc(projectDocRef, 'album', albumId);

      await deleteDoc(albumDocRef);
      await deleteImageFunction(coverImg);

      dispatch(albumActions.deleteAlbum(albumId));
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
