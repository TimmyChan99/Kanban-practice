import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar.js';
import { getAndDisplay } from './modules/get_and_display_data.js';
import modalDisplay from './modules/modal.js';
import addComment from './modules/posts.js';
import getComment, { displayComments } from './modules/getComments.js';
import { sendlikes, heartReact, getLikes } from './modules/likes_interaction.js';
import { likesCounter } from './modules/likesCounter.js';

const elements = {};
const API_KEY = '6z6I8v1vgq10YNsH5ORA';

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
});

const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', async (e) => {
  e.stopPropagation();
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentNode.id;
    elements.id = id;
    modal.style.display = 'block';
    modalDisplay(id, e);
    const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments?item_id=${id}`;
    await getComment(`${BASE_URL}`);
  }
});

const closeModal = document.querySelector('.modal-content');
closeModal.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    modal.style.display = 'none';
  }
});

const modalContainer = document.querySelector('.modal-content');

modalContainer.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    await addComment();

    window.addEventListener('load', () => {
      displayComments();
    });
  }

  if (e.target.tagName === 'INPUT') {
    const input = e.target;
    input.setAttribute('required', 'required');
    elements.input = input;
  }

  if (e.target.tagName === 'TEXTAREA') {
    const textarea = e.target;
    textarea.setAttribute('required', 'required');
    elements.textarea = textarea;
  }
});

eventLists.addEventListener('click', async (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const id = e.target.parentNode.parentNode.parentNode.id;
    const span = e.target.parentNode.children[0].children[0];
    const likesNumber = await getLikes();

    sendlikes(id);
    heartReact(e.target);
    likesCounter(likesNumber, id, span);
  }
});

export { elements };
