export const theme = {
  mobile: '375px',
  desktop: '1440px',
  text: 'hsl(200, 15%, 8%)',
  input: 'hsl(0, 0%, 52%)',
  background: 'hsl(0, 0%, 98%)',
  elements: 'hsl(0, 0%, 100%)',
}

export const darkTheme = ({ mobile, desktop, elements, input }) => ({
  mobile: mobile,
  desktop: desktop,
  text: elements,
  input: input,
  background: 'hsl(207, 26%, 17%)',
  elements: 'hsl(209, 23%, 22%)',
})
