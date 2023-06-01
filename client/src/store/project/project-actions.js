import { projectActions } from './project-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const fetchProject = () => async (dispatch) => {
  try {
    const projectCollection = collection(db, 'project');

    const featuredQuerySnapshot = await getDocs(
      query(
        projectCollection,
        where('featured', '==', true),
        orderBy('createdAt')
      )
    );
    const featuredData = featuredQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const otherQuerySnapshot = await getDocs(
      query(
        projectCollection,
        where('featured', '==', false),
        orderBy('createdAt')
      )
    );
    const otherData = otherQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const data = [...featuredData, ...otherData];

    dispatch(projectActions.setProject(data));
    console.log('fetchProject data:', data);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

export const createProject = (projectData) => async () => {
  const { title, description, coverImg, isFeatured } = projectData;

  try {
    const imageId = uuidv4();
    const imageName = `${coverImg.name}_${imageId}`;

    const storageRef = ref(storage, `/images/project/${imageName}`);
    await uploadBytes(storageRef, coverImg);

    const imageUrl = await getDownloadURL(storageRef);

    const projectCollection = collection(db, 'project');
    const newProject = await addDoc(projectCollection, {
      title,
      description,
      coverImg: imageUrl,
      featured: isFeatured,
      createdAt: new Date().toString(),
    });

    console.log('Projeto criado com ID: ', newProject.id);
  } catch (error) {
    console.log('Erro ao criar projeto: ', error);
  }
};
