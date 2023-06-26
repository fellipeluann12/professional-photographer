import { projectActions } from './project-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
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
  const { id, title, description, coverImg, isFeatured } = projectData;
  console.log('img true?', coverImg);

  try {
    let imageUrl;

    if (coverImg) {
      const imageId = uuidv4();
      const imageName = `${coverImg.name}_${imageId}`;

      const storageRef = ref(storage, `/images/project/${imageName}`);
      await uploadBytes(storageRef, coverImg);

      imageUrl = await getDownloadURL(storageRef);
    }

    const projectCollection = collection(db, 'project');

    if (id) {
      const projectDocRef = doc(projectCollection, id);
      const updateData = {
        title,
        description,
        featured: isFeatured,
        updatedAt: new Date().toString(),
      };

      if (imageUrl !== undefined) {
        updateData.coverImg = imageUrl;
      }

      await updateDoc(projectDocRef, updateData);

      console.log('Projeto atualizado com sucesso!');
    } else {
      const newProject = await addDoc(projectCollection, {
        title,
        description,
        coverImg: imageUrl,
        featured: isFeatured,
        createdAt: new Date().toString(),
      });

      console.log('Projeto criado com ID: ', newProject.id);
    }
  } catch (error) {
    console.log('Erro ao criar/atualizar projeto: ', error);
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
    const projectDocRef = doc(db, 'project', projectId);
    await deleteDoc(projectDocRef);
    dispatch(projectActions.deleteProject(projectId));
    console.log('Projeto excluído com sucesso!');
  } catch (error) {
    console.log('Erro ao excluir projeto: ', error);
  }
};
