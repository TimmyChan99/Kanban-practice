import axios from 'axios';
import commentCounter from './commentCounter.js';

export const displayComments = (arr) => {
  const commentSection = document.querySelector('.comments-sect');
  commentSection.innerHTML = '';
  for (let comment = 0; comment < arr.length; comment += 1) {
    commentSection.innerHTML += `
      <li class='comment-list'>
      <span>${arr[comment].creation_date}</span> 
      <span>${arr[comment].username}: </span>
      <span>${arr[comment].comment}</span>
      </li> 
      `;
  }
};

const getComment = async (url) => {
  let result = '';
  const btn = document.querySelector('.comment_btn').parentNode;

  const response = await axios.get(`${url}`);

  result = response.data;
  displayComments(result);

  const header = document.querySelector('.comment-header');
  header.textContent = `Comments (${commentCounter(btn.id, result)})`;

  return result;
};

export default getComment;
