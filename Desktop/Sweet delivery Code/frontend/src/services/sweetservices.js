
import axios from 'axios';
export const getAll = async () => {
  const { data } = await axios.get('/api/sweets');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('/api/sweets/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('/api/sweets/tags');
  return data;
};

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get('/api/sweets/tag/' + tag);
  return data;
};

export const getById = async sweetId => {
  const { data } = await axios.get('/api/sweets/' + sweetId);
  return data;
};
