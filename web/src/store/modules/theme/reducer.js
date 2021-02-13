import { lightTheme } from '../../../styles/themes';

const INITIAL_STATE = {
  theme: lightTheme,
};

function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@theme/APPLY_THEME':
      return { theme: action.payload.theme };
    default:
      return state;
  }
}

export default theme;
