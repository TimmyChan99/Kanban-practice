/* eslint-disable import/no-cycle */
import './style.css';
import './mobile_ver.css';
import renderNavBar from './modules/navBar.js';
import getAndDisplay from './modules/get_and_display_data.js';
import modalDisplay from './modules/modal.js';
import addComment from './modules/posts.js';
import getComment from './modules/getComments.js';
import { sendlikes, heartReact, getLikes } from './modules/likes_interaction.js';
import likesCounter from './modules/likesCounter.js';

const elements = {};
const API_KEY = '6z6I8v1vgq10YNsH5ORA';

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
});

const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target.parentNode;
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
    const { id } = e.target;
    const inputName = document.querySelector('#name');
    const inputText = document.querySelector('#comment');

    await addComment(id, inputName.value, inputText.value);

    const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments?item_id=${id}`;
    await getComment(`${BASE_URL}`);

    const form = document.querySelector('#comment-form');
    form.reset();
  }
});

eventLists.addEventListener('click', async (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const { id } = e.target.parentNode.parentNode.parentNode;
    const span = e.target.parentNode.children[0].children[0];
    const likesNumber = await getLikes();

    sendlikes(id);
    heartReact(e.target);
    likesCounter(likesNumber, id, span);
  }
});

export default elements;
