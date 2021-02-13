import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

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
    <>
      <label htmlFor={fieldName}>{label}</label>

      <Tooltip content={error} isOpen={!!error}>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          className={error ? 'has-error' : ''}
          onFocus={clearError}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </Tooltip>

      {/* {error && <span className="error">{error}</span>} */}
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
