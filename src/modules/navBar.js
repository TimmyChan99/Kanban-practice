const nav = document.querySelector('.nav-container');

const renderNavBar = () => {
  const navs = `<ul class="nav">
        <li>
          <a href="#">
            <img src="../asset/resource/logo.jpeg" class="logo" alt="Event logo" />
          </a>
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
