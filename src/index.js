import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar';
import { getAndDisplay } from './modules/get_and_display_data';
import modalDisplay from './modules/modal';

renderNavBar();

window.addEventListener('load', () => {
  getAndDisplay();
});

const eventLists = document.querySelector('.events_list');
const modal = document.querySelector('.modal');
eventLists.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.id;
    console.log(e.target);
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
