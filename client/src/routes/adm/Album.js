import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlbum } from '../../store/album/album-actions';
import { fetchProject } from '../../store/project/project-actions';

export const Album = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [coverImg, setCoverImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAlbum({ title, description, projectId, coverImg }));
  };

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Project:</label>
      <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
        <option>Selecione um projeto</option>
        {project.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
      <label htmlFor="coverImg">
        Image:
        <input
          type="file"
          title="coverImg"
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
