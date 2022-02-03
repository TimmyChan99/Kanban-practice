import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar';
import { getAndDisplay } from './modules/get_and_display_data';
import modalDisplay from './modules/modal';
<<<<<<< HEAD
import addComment from './modules/posts';
import getComment, { displayComments } from './modules/getComments';

const elements = {};
const API_KEY = '6z6I8v1vgq10YNsH5ORA';
=======
import { sendlikes, heartReact, getLikes } from './modules/likes_interaction';
import { likesCounter } from './modules/likesCounter';
>>>>>>> bd5a366ecffc64f427878381c8e55a87805db385

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
  
});

const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.id;
    elements.id = id;
    modal.style.display = 'block';
    modalDisplay(id);
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

<<<<<<< HEAD
const modalContainer = document.querySelector('.modal-content');

modalContainer.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    await addComment();
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

export { elements };
=======
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


>>>>>>> bd5a366ecffc64f427878381c8e55a87805db385
