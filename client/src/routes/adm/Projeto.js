import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/project/project-actions';

export default function Projeto() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProject({ title, description, image }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="image">Imagem:</label>
        <input
          type="file"
          title="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Criar projeto</button>
    </form>
  );
}
