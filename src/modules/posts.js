import axios from 'axios';
import { elements } from '../index';

const API_KEY = '6z6I8v1vgq10YNsH5ORA';
const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments`;

const postComment = async (url, comment) => {
  let newPost = '';
  try {
    const response = await axios.post(`${url}`, comment);
    newPost = await response.data;
  } catch (error) {
    throw error.message;
  }

  return newPost;
};

const addComment = async () => {
  const { input: name, textarea: comments, id } = elements;
  const item_id = id;
  const username = name.value;
  const comment = comments.value;

  if (username === '' && comment === '') {
    alert('Please enter a comment');
  }

  const newComment = {
    item_id,
    username,
    comment,
  };
  await postComment(BASE_URL, newComment);
  name.value = '';
  comments.value = '';
};

export default addComment;
