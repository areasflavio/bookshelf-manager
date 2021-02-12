import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [inputError, setInputError] = useState(error);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleErrors() {
    if (inputError !== '') {
      setInputError('');
    }
  }

  useEffect(() => {
    setInputError(error);
  }, [error]);

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>

      <Tooltip content={inputError} isOpen={inputError}>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          className={inputError ? 'has-error' : ''}
          onFocus={handleErrors}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </Tooltip>

      {/* {inputError && <span className="error">{inputError}</span>} */}
    </>
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
