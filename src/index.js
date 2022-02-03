import _ from 'lodash';
import './style.css';
import './mobile_ver.css';
import renderNavBar from './modules/navBar';
import { getAndDisplay } from './modules/get_and_display_data';
import modalDisplay from './modules/modal';
import { sendlikes, heartReact, getLikes } from './modules/likes_interaction';
import { likesCounter } from './modules/likesCounter';

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


