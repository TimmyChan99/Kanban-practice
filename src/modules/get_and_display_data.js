import { getLikes } from './likes_interaction.js';

const api = 'https://app.ticketmaster.com/discovery/v2/events?apikey=AvfGG6nhxrHNoLBve2IVp4jYw6lxQAMI&locale=*&page=5';

let data = '';

const getAndDisplay = async () => {
  const getEvents = await fetch(api);

  const reponse = await getEvents.json();
  const likesNumber = await getLikes();

  data = reponse;

  const eventsList = document.querySelector('.events_list');

  for (let i = 0; i < 9; i += 1) {
    eventsList.innerHTML += `
    <li class="the_event d-flex-column" id=${i}>
          <div class="image">
            <div class="likes d-flex-row">
              <small class="like"><span class="number_of_likes">${likesNumber[i].likes}</span>&nbsp;Likes</small>
              <i class="far fa-heart"></i>
            </div>
            <img src=${reponse._embedded.events[i].images[0].url} alt="event">
          </div>
          <div class="event_info d-flex-column">
            <h5 class="event_name">${reponse._embedded.events[i].name}</h5>
            <p class="event_genre">Genre:&nbsp; ${reponse._embedded.events[i].classifications[0].genre.name}</p>
            <p class="event_date">${reponse._embedded.events[i].dates.start.localDate}</p>
          </div>
          <button class="comment_btn">comment</button>
        </li>
    `;
  }
};

export { data, getAndDisplay };
