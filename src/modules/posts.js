import axios from 'axios';
import { elements } from '../index.js';

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

const toastMsg = async () => {
  const errorMsg = document.querySelector('.validate-message');
  errorMsg.style.display = 'block';
  errorMsg.textContent = 'Please add name and comment to proceed';
  setTimeout(() => {
    errorMsg.style.display = 'none';
  }, 3000);
};

const addComment = async () => {
  const { input: name, textarea: comments, id } = elements;
  const item_id = id;
  const username = name;
  const comment = comments;

  if (!username && !comment) {
    toastMsg();
    return null;
  }

  const newComment = {
    item_id,
    username: name.value,
    comment: comments.value,
  };
  console.log(newComment);
  await postComment(BASE_URL, newComment);
  name.value = '';
  comments.value = '';
};

export default addComment;
