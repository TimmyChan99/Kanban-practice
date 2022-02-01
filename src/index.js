import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar';
import { getAndDisplay } from './modules/get_and_display_data';
import modalDisplay from './modules/modal';
import postComment from './modules/posts';
const API_KEY = '6z6I8v1vgq10YNsH5ORA';
const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments`;

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
});

const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.id;
    modal.style.display = 'block';
    modalDisplay(id);
  }
});

const closeModal = document.querySelector('.modal-content');
closeModal.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    modal.style.display = 'none';
  }
});

const modalContainer = document.querySelector('.modal-content');
modalContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'FORM') {
    const addComment = async () => {
      console.log(e.target);
      const id = Math.random().toString(36).slice(2);
      const name = e.target.children[1];
      const comment = document.querySelector('#comment').value;
      const newComment = {
        id,
        name,
        comment,
      };
      console.log(name);
      e.target.reset();
      // await postComment(BASE_URL, newComment);
    };
    addComment();
  }
});
