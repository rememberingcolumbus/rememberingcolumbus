export const getScreens = screen =>{

  const screens = {

    desktop: '1920px',
    tablet: '1025px',
    mobile: '400px'
  }

  return screens[screen];
}