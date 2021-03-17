import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

function InputMask({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const {
    fieldName,
    registerField,
    defaultValue,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <Tooltip content={error} isOpen={!!error}>
        <ReactInputMask
          id={name}
          ref={inputRef}
          defaultValue={defaultValue}
          className={error ? 'has-error' : ''}
          onFocus={clearError}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </Tooltip>
    </div>
  );
}

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rest: PropTypes.oneOfType(PropTypes.string, PropTypes.bool, PropTypes.func),
};

InputMask.defaultProps = {
  label: '',
  rest: {},
};

export default InputMask;
