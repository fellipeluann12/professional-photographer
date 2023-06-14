import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../store/project/project-actions';
import {
  addAlbumPhotos,
  fetchAlbumsByProjectId,
} from '../../store/album/album-actions';

export const Photos = () => {
  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const handleProjectSelect = (projectId) => {
    setProjectId(projectId);
    dispatch(fetchAlbumsByProjectId(projectId));
  };

  const handleFileSelect = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newPhoto = e.target.files[i];
      setPhotos((prevState) => [...prevState, newPhoto]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('id album:', albumId);
    dispatch(addAlbumPhotos(projectId, albumId, photos));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="project">Project: </label>
      <select
        name="project"
        value={projectId}
        onChange={(e) => handleProjectSelect(e.target.value)}
      >
        <option>Selecione um projeto</option>
        {project.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
      <label htmlFor="album">Album: </label>
      <select
        name="album"
        value={albumId}
        onChange={(e) => setAlbumId(e.target.value)}
      >
        <option>Selecione um album</option>
        {album.map((album) => (
          <option key={album.id} value={album.id}>
            {album.title}
          </option>
        ))}
      </select>
      <label htmlFor="photos">Photos: </label>
      <input
        type="file"
        multiple={true}
        id="photos"
        name="photos"
        onChange={handleFileSelect}
      />
      <button type="submit">Go</button>
    </form>
  );
};
