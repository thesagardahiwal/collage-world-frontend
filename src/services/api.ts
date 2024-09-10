'use server'
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (email: string, password: string, role: string, name: string) => {
  const response = await axios.post(`${API_URL}/auth/register`, { email, password, role, name });
  return response.data;
};