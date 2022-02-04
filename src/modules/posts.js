import axios from 'axios';

const postComment = async (comment) => {
  const API_KEY = '6z6I8v1vgq10YNsH5ORA';
  const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments`;

  let newPost = '';
  try {
    const response = await axios.post(BASE_URL, comment);
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

const addComment = async (id, username, comment) => {
  if (!username && !comment) {
    toastMsg();
  }

  const newComment = {
    item_id: id,
    username,
    comment,
  };

  await postComment(newComment);

  return newComment;
};

export default addComment;
