import axios from 'axios';

const getComment = async (url) => {
  let result = '';
  try {
    const response = await axios.get(`${url}`);
    result = response.data;

    const commentSection = document.querySelector('.comments-sect');
    for (let comment = 0; comment < result.length; comment += 1) {
      commentSection.innerHTML += `
      <li>
      <span>${result[comment].creation_date}</span> 
      <span>${result[comment].username}: </span>
      <spna>${result[comment].comment}</spna>
      </li> 
      `;
    }
  } catch (error) {
    throw error.message;
  }

  const header = document.querySelector('.comment-header');
  const btn = document.querySelector('.comment_btn');

  const commentCounter = (id, arr) => {
    if (id) {
      return arr.length;
    }
  };

  header.textContent = `Comments (${commentCounter(btn.id, result)})`;

  return result;
};

export default getComment;
