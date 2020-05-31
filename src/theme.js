export const theme = {
  // breakpoints
  mobile: '375px',
  desktop: '1440px',
  // colors
  text: 'hsl(200, 15%, 8%)',
  input: 'hsl(0, 0%, 52%)',
  background: 'hsl(0, 0%, 98%)',
  elements: 'hsl(0, 0%, 100%)',
  // text
  font: '"Nunito Sans", sans-serif',
  homepageItems: '1.4rem',
  detailPage: '1.6rem',
  light: 300,
  normal: 600,
  bold: 800,
}

export const darkTheme = (theme) => ({
  ...theme,
  text: theme.elements,
  background: 'hsl(207, 26%, 17%)',
  elements: 'hsl(209, 23%, 22%)',
})
