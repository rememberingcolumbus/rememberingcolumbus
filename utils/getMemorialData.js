//This function returns mock data representing user submissions for the virtual memorial
//SCHEMA 
/*{
    firstName: string,
    lastName: string,
    dateOfBirth: float, <- Date object initialized as YYYY, MM, DD
    dateOfDeath: float, <- Date object initialized as YYYY, MM, DD
    placeOfBirth: string, 
    placeOfDeath: string, 
    message: string
  }*/

export function getMemorialData(){

  const memorialData = [
    {
      firstName : 'Bert',
      lastName : 'Johnston',
      dateOfBirth : new Date(1926,3, 19),
      dateOfDeath : new Date(2020, 3, 14),
      placeOfBirth : 'Washington, PA',
      placeOfDeath : 'Spanish Fort, AL',
      message : 'Bert was a beloved father, grandfather, and man of faith.'
    },
    {
      firstName : 'Martha',
      lastName : 'Albinez',
      dateOfBirth : new Date(1933,11, 8),
      dateOfDeath : new Date(2020, 2, 24),
      placeOfBirth : 'Marion, OH',
      placeOfDeath : 'Columbus, OH',
      message : 'Loved her dogs, arepas, and the Cleveland Indiana. GO TRIBE!'
    },
    {
      firstName : 'Albert',
      lastName : 'Lambardi',
      dateOfBirth : new Date(1941,6,14),
      dateOfDeath : new Date(2020, 4, 18),
      placeOfBirth : 'Stamford, CT',
      placeOfDeath : 'Grove City, OH',
      message : 'An educator for 25 years with Columbus Public Schools.'
    }
  ]

  return memorialData;
}

// {
//   firstName : ,
//   lastName : ,
//   dateOfBirth : ,
//   dateOfDeath : ,
//   placeOfBirth : ,
//   placeOfDeath : ,
//   message : 
// },