import logo from '../../asset/resource/logo.jpeg';

const renderNavBar = () => {
  const nav = document.querySelector('.nav-container');
  const navs = `<ul class="nav">
        <li class='list-logo'>
          <a href="#">
            <img src=${logo} class="logo" alt="Event logo" />
          </a>
          <span class="ename">Evenue</span>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Book Events</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>`;

  nav.innerHTML = navs;
};

export default renderNavBar;
