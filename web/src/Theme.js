import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ThemeSwitcher from './components/ThemeSwitcher';

function ThemeWrapper({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitcher currentTheme={theme} />
      {children}
    </ThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ThemeWrapper;
