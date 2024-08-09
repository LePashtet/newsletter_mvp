import API from './API';

export const fetchUser = async (userId: string) => {
  try {
    //TODO possibly change this this to another route
    const response = await API.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
