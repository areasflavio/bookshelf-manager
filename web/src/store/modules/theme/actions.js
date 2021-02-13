export function applyTheme(theme) {
  return {
    type: '@theme/APPLY_THEME',
    payload: { theme },
  };
}
