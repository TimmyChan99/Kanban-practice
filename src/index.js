import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar';
import { getAndDisplay } from './modules/get_and_display_data';
import modalDisplay from './modules/modal';
import addComment from './modules/posts';
import getComment from './modules/getComments';

const API_KEY = '6z6I8v1vgq10YNsH5ORA';
const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments?item_id=`;

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
});

const elements = {};
const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.id;
    elements.id = id;
    modal.style.display = 'block';
    modalDisplay(id);
    await getComment(`${BASE_URL}${id}`);
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
