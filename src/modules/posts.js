import axios from 'axios';

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

export default postComment;
