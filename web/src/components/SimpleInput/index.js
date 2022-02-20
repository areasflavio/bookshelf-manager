import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import { Container } from './styles';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <Tooltip content={error} isOpen={!!error}>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          className={error ? 'has-error' : ''}
          onFocus={clearError}
          {...rest}
        />
      </Tooltip>

      {/* {error && <span className="error">{error}</span>} */}
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  label: '',
};

export default Input;
