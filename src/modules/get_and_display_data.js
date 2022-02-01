const api = 'https://app.ticketmaster.com/discovery/v2/events?apikey=AvfGG6nhxrHNoLBve2IVp4jYw6lxQAMI&locale=*&page=5';

const getAndDisplay = async () => {
    const getEvents = await fetch(api);
    const reponse = await getEvents.json();

    const eventsList = document.querySelector('.events_list');

    for ( let i = 0; i < 9 ; i += 1) {
       
        eventsList.innerHTML += `
    <li class="the_event d-flex-column">
          <div class="image">
            <img src=${reponse._embedded.events[i].images[0].url} alt="">
          </div>
          <div class="event_info d-flex-column">
            <h5 class="event_name">${reponse._embedded.events[i].name}</h5>
            <p class="event_genre">Genre:&nbsp; ${reponse._embedded.events[i].classifications[0].genre.name}</p>
            <p class="event_date">${reponse._embedded.events[i].dates.start.localDate}</p>
          </div>
          <button class="comment_btn">comment</button>
        </li>
    `

    }
    
}

export default  getAndDisplay;