import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlbum } from '../../store/album/album-actions';
import { fetchProject } from '../../store/project/project-actions';

export const Album = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectIdRef, setProjectIdRef] = useState('');
  console.log(projectIdRef);
  const [coverImg, setCoverImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAlbum({ title, description, projectIdRef, coverImg }));
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
      <select
        value={projectIdRef}
        onChange={(e) => setProjectIdRef(e.target.value)}
      >
        {project.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
      <label>
        Image:
        <input
          type="file"
          title="images"
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
