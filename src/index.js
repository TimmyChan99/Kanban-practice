import _ from 'lodash';
import './style.css';
import renderNavBar from './modules/navBar';
import getAndDisplay from './modules/get_and_display_data'


window.addEventListener('load', () => {
    getAndDisplay();
});