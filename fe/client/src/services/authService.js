import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const getUserById = async (userId) => {

  const result = await request.get(`${baseUrl}/user/${userId}`);
  return result;
};

export const edit = async (userId, updatedUserData) => {

  const result = await request.put(`${baseUrl}/user/${userId}`, updatedUserData);
  return result;
};

export const login = async (email, password) => {

  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });
  return result;

};

export const register = async (email, password) => {
  const result = request.post(`${baseUrl}/register`, {
    email,
    password,
  });
  return result;

}

export const logout = () => request.get(`${baseUrl}/logout`);
