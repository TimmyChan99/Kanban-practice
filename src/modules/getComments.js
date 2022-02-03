import axios from 'axios';
import commentCounter from './commentCounter';

const getComment = async (url) => {
  let result = '';
  const btn = document.querySelector('.comment_btn');
  const commentSection = document.querySelector('.comments-sect');
  try {
    isResultEmpty(btn.id, url);
    const response = await axios.get(`${url}`);

    result = response.data;
    displayComments(result, commentSection);
  } catch (error) {
    throw error.message;
  }

  const header = document.querySelector('.comment-header');
  header.textContent = `Comments (${commentCounter(btn.id, result)})`;

  return result;
};

const displayComments = (arr, container) => {
  for (let comment = 0; comment < arr.length; comment += 1) {
    container.innerHTML += `
      <li>
      <span>${arr[comment].creation_date}</span> 
      <span>${arr[comment].username}: </span>
      <span>${arr[comment].comment}</span>
      </li> 
      `;
  }
};

const isResultEmpty = (id, url) => {
  if (id && !url) {
    console.log(response);
    container.innerHTML += '<li>No comment found.</li>';
  }
};

// export const refreshComments = () => displayComments();

export default getComment;
