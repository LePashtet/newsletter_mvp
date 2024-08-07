import axiosInstance from './axiosInstance';

export const fetchUser = async (userId: string) => {
  try {
      //TODO possibly change this this to another route
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};