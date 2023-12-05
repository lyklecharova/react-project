import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const getUserById = async (userId) => {
  try {
    const result = await request.get(`${baseUrl}/user/${userId}`);
    return result;
  } catch (err) {
    console.error('Error fetching user by ID:', err);
    throw err;
  }

};

export const edit = async (userId, updatedUserData) => {
  try {
    const result = await request.put(`${baseUrl}/user/${userId}`, updatedUserData);
    return result;
  } catch (err) {
    console.error('Error editing user:', err);
    throw err;
  }

};

export const login = async (email, password) => {
  try {
    const result = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return result;
  } catch (err) {
    console.log('Invalid email or password!')
    throw err;
  }

};

export const register = async (email, password) => {
  try{
    const result = request.post(`${baseUrl}/register`, {
      email,
      password,
    });

    if(request.status === 409){
     throw new Error('Try Again &#128533;')
    }
    
    return result;
  }catch(err){
    // console.log('Invalid email or password!')
    throw Error(err);
  }

}

export const logout = () => request.get(`${baseUrl}/logout`);
