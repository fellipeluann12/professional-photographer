import { albumActions } from './album-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, doc, getDocs, where } from 'firebase/firestore';

export const fetchAlbum = (projectIdRef) => async (dispatch) => {
  try {
    const projectRef = doc(db, 'project', projectIdRef);
    const albumCollection = collection(projectRef, 'album');
    const querySnapshot = await getDocs(albumCollection);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(albumActions.setAlbum(data));
    console.log('fetchAlbums data:', data);
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

export const createAlbum = (albumData) => async () => {
  const { projectIdRef, coverImg } = albumData;

  try {
    const coverImgId = uuidv4();
    const coverImgName = `${coverImg.name}_${coverImgId}`;

    const storageRef = ref(storage, `/images/album/${coverImgName}`);
    await uploadBytes(storageRef, coverImg);

    const coverImgUrl = await getDownloadURL(storageRef);

    const projectRef = doc(db, 'project/', projectIdRef);
    const albumCollection = collection(projectRef, 'album');
    const newAlbum = await addDoc(albumCollection, {
      ...albumData,
      projectIdRef: projectRef,
      coverImg: coverImgUrl,
    });

    console.log('Album criado com ID: ', newAlbum.id);
  } catch (error) {
    console.log('Erro ao criar projeto: ', error);
  }
};
