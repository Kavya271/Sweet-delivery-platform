import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Tags from '../../Components/Tags/Tags';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from '../../services/sweetservices';
import NotFound from '../../Components/NotFound/NotFound'


const initialState = { sweets: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SWEETS_LOADED':
      return { ...state, sweets: action.payload };
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function Homepage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sweets, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

    const loadSweets = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadSweets.then(sweets => dispatch({ type: 'SWEETS_LOADED', payload: sweets }));
  }, [searchTerm, tag]);

  return (
    <>
      <Search />
      <Tags tags={tags} />
      {sweets.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails sweets={sweets} />
    </>
  );
}
