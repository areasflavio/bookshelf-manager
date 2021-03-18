import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

function FileInput({ fieldName }) {
  const { defaultValue, registerField } = useField(fieldName);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const [placeImg, setPlaceImg] = useState('');

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: `${fieldName}_id`,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, registerField]);

  useEffect(() => {
    if (fieldName === 'avatar') {
      setPlaceImg(
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MVzzVBGqNE35Ksyya4rnsQHaHa%26pid%3DApi&f=1'
      );
    } else {
      setPlaceImg('https://via.placeholder.com/120x180?text=No+cover');
    }
  }, [fieldName]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container type={fieldName}>
      <label htmlFor={fieldName}>
        <img src={preview || placeImg} alt="preview" />

        <input
          type="file"
          id={fieldName}
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

FileInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
};

export default FileInput;
