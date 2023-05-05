import { projectActions } from './project-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const fetchProject = () => async (dispatch) => {
  try {
    const projectCollection = collection(db, 'project');
    const querySnapshot = await getDocs(projectCollection);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(projectActions.setProject(data));
    console.log('fetchProject data:', data);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

export const createProject = (projectData) => async () => {
  const { title, description, image } = projectData;

  try {
    const imageId = uuidv4();
    const imageName = `${image.name}_${imageId}`;

    const storageRef = ref(storage, `/images/project/${imageName}`);
    await uploadBytes(storageRef, image);

    const imageUrl = await getDownloadURL(storageRef);

    const projectCollection = collection(db, 'project');
    const newProject = await addDoc(projectCollection, {
      title,
      description,
      image: imageUrl,
    });

    console.log('Projeto criado com ID: ', newProject.id);
  } catch (error) {
    console.log('Erro ao criar projeto: ', error);
  }
};
