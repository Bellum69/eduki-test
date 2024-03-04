import axios from 'axios';

import { ResponseItem } from '../types';

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsVjZvNzJJQjd3cGdsRHhCIiwianRpIjoiNGFiZjA1
MTI2NzNhY2ZkZTI5NTcxMGU3NjgxNjVjMmY1MWFjNzNlNTFkOWUwNWFkZmZjMjUyNzFkODY1ZDc4Z
TYxM2FjZTNkNDYxNjhhZWYiLCJpYXQiOjE2Nzg2NjAxMjcuODIzNDcyLCJuYmYiOjE2Nzg2NjAxMjcuODIz
NDc5LCJleHAiOjE3NDE4MTg1MjcuODIyNDUzLCJzdWIiOiIiLCJzY29wZXMiOlsicHVibGljIl19.uEaoxhTTf
WqCoANRnNAwJaFU7Q0vz4K43XjYY3IwaXTeaydmcCgq1iPKpxrLsJ0Nrf8IPtyzYVFBiLDest-SkS76-Hbs7
5HMG66Wnl8WOyp5m8Uxc5KzAs6kzBwmhfr5b0TQEoLBVEEV5KSTJHWDTQlGlOJUwCRhoNHjqXJs9L4
t_WOyKNE9y_Q2ED_z1dsEBNCl-HIiZ6c2Dci4pXZKs8-9jUpiaCga2tfjO6SvNqVkGle408p-9TRYD1BMTI1s7
R1e8BbsTSo5FQJUgi6qUVapQCxu4WU3i3Wil1jjDKHqkSkafBl6VMX2ci-pj9fLKsUzuNSxCOUu9Jo8sbAE8
e6VPOK3RxivIWN6BCX5sPBQIIWeS_bAjZ0vNBcubrJF4wwRwiUnSsgGKt3XnI9KhGsjaY5kmbqSnuQ6Wd
AvDkfvSA-HiX1xOCGmfQDXoGNrRR706bs7wlpqIbNF7lZZFjocfmiODif3rPj0QWf2amlSuCmlZzkyCoveNp
43b2xYFQxcA1PlvAtchFTW6qA6vmqax7zoRfF1kQZg46P1pHimK3UchquAzeS4fALP0G93XQCprvN5iwN
L9SuXgADlI-2QR1hWQ-i7RW2ElUhLt7PDQlEw5y49OLe5nhOMOxaSVRV8sbk5lX9CS28cJBezbg0ArLgFO
v1nH88VNBZQKdM`;

const headers = {
  Authorization: `Bearer ${token}`,
};

export const searchItems = async (q: string, p: number): Promise<ResponseItem[]> => {
  const response = await axios.get('https://api.eduki.com/api/v1/elastic', {
    params: {
      limit: 20,
      q,
      p,
      world: 'de',
    },
    headers,
  });
  return response.data.data.items.materials;
};

export const getItem = async (id: string): Promise<ResponseItem> => {
  const response = await axios.get(`https://api.eduki.com/api/v1/materials/${id}?world=de`, {
    headers,
  });

  return response.data.data.items[0];
};
