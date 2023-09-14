import { projectActions } from './project-slice';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../firebase.js';
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
  where,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

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
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

export const createProject = (projectData) => async () => {
  const { id, title, description, coverImg, featured } = projectData;

  try {
    let imageInfo = null;

    if (coverImg) {
      const coverImgId = uuidv4();
      const coverImgName = `${coverImg.name}_${coverImgId}`;

      const storageRef = ref(storage, `/images/project/${coverImgName}`);
      await uploadBytes(storageRef, coverImg);

      const imageUrl = await getDownloadURL(storageRef);

      imageInfo = {
        url: imageUrl,
        name: coverImgName,
      };
    }

    const projectCollection = collection(db, 'project');

    if (id) {
      const projectDocRef = doc(projectCollection, id);
      const updateData = {
        title,
        description,
        featured: featured,
        updatedAt: new Date().toString(),
      };

      if (imageInfo) {
        updateData.coverImg = imageInfo;
      }

      await updateDoc(projectDocRef, updateData);

      const updatedProjectDoc = await getDoc(projectDocRef);
      const updatedProjectData = { id, ...updatedProjectDoc.data() };

      return updatedProjectData;
    } else {
      const newProject = await addDoc(projectCollection, {
        title,
        description,
        coverImg: imageInfo,
        featured: featured,
        createdAt: new Date().toString(),
      });

      const newProjectDoc = await getDoc(doc(projectCollection, newProject.id));
      const newProjectData = { id: newProject.id, ...newProjectDoc.data() };

      return newProjectData;
    }
  } catch (error) {
    throw error;
  }
};

export const deleteImageFunction = async (coverImg) => {
  const storageImgRef = ref(storage, `/images/project/${coverImg.name}`);

  deleteObject(storageImgRef)
    .then(() => {
      ('deletou');
    })
    .catch((error) => {});
};

export const deleteProject = (projectId, coverImg) => async (dispatch) => {
  try {
    const projectDocRef = doc(db, 'project', projectId);
    await deleteDoc(projectDocRef);
    await deleteImageFunction(coverImg);
    dispatch(projectActions.deleteProject(projectId));
  } catch (error) {}
};
