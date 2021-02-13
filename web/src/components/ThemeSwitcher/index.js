import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { FaMoon, FaSun } from 'react-icons/fa';
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

  function handleChange(checked) {
    setTheme(checked ? 'dark' : 'light');
  }

  return (
    <Container>
      <Switch
        checked={theme === 'dark'}
        onChange={handleChange}
        uncheckedIcon={
          <FaSun
            size={16}
            color={currentTheme.colors.backgroundSecondary}
            style={{
              marginTop: 2,
              marginLeft: 4,
            }}
          />
        }
        checkedIcon={
          <FaMoon
            size={16}
            color={currentTheme.colors.primary}
            style={{
              marginTop: 2,
              marginLeft: 6,
            }}
          />
        }
        height={20}
        width={48}
        handleDiameter={24}
        onColor={currentTheme.colors.backgroundSecondary}
        onHandleColor={currentTheme.colors.highlight}
        offColor={currentTheme.colors.primary}
        offHandleColor={currentTheme.colors.highlight}
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 8px rgba(0, 0, 0, 0.2)"
      />
    </Container>
  );
}

ThemeSwitcher.propTypes = {
  currentTheme: PropTypes.shape({
    name: PropTypes.string,
    colors: PropTypes.shape({
      backgroundSecondary: PropTypes.string,
      highlight: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
};

export default ThemeSwitcher;
