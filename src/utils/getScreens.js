export const getScreens = screen =>{

  const screens = {

    desktop: '1920px',
    tablet: '775px',
    mobile: '400px'
  }

  return screens[screen];
}