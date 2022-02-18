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
        'https://via.placeholder.com/150/F2ECFF/394B40/?text=No%20Avatar'
      );
    } else {
      setPlaceImg('https://plchldr.co/i/120x180?bg=666666&text=No+Cover');
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
