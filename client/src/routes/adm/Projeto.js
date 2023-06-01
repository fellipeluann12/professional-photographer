import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/project/project-actions';

export default function Projeto() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImg, setCoverImg] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProject({ title, description, coverImg, isFeatured }));
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
        <label htmlFor="coverImg">Imagem:</label>
        <input
          type="file"
          title="coverImg"
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="isFeatured">Is featured?</label>
        <input
          type="checkbox"
          name="isFeatured"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
        />
      </div>
      <button type="submit">Criar projeto</button>
    </form>
  );
}
