import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSun, FiMoon } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { darkTheme, lightTheme } from '../../styles/themes';
import { applyTheme } from '../../store/modules/theme/actions';

import { Container } from './styles';

const themes = [darkTheme, lightTheme];

function ThemeSwitcher({ currentTheme }) {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(currentTheme.name);

  useEffect(() => {
    setTheme(currentTheme.name);
  }, [currentTheme]);

  useEffect(() => {
    const toApplyTheme = themes.find((t) => t.name === theme);

    dispatch(applyTheme(toApplyTheme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  function handleChange(toogleTheme) {
    setTheme(toogleTheme);
  }

  return (
    <Container>
      {theme === 'dark' && (
        <FiSun
          size={16}
          color={currentTheme.colors.primary}
          onClick={() => handleChange('light')}
        />
      )}

      {theme === 'light' && (
        <FiMoon
          size={16}
          color={currentTheme.colors.primary}
          onClick={() => handleChange('dark')}
        />
      )}
    </Container>
  );
}

ThemeSwitcher.propTypes = {
  currentTheme: PropTypes.shape({
    name: PropTypes.string,
    colors: PropTypes.shape({
      primary: PropTypes.string,
    }),
  }).isRequired,
};

export default ThemeSwitcher;
