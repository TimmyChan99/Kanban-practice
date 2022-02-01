import { data } from './get_and_display_data';

const modalDisplay = (id) => {
  const extractData = data._embedded.events;
  const popUp = document.querySelector('.modal-content');
  let view = '';
  extractData.forEach((event) => {
    if (event.id === id) {
      view += `
          <div class="img-contianer">
            <img src=${event.images[0].url} alt="" />
            <p class="close-btn">&times;</p>
          </div>
  
          <div class="modal-info">
            <h2>${event.name}</h2>
  
            <div class="modal-classification">
              <span>Event Type: ${event.classifications[0].genre.name}</span>
              <span>Date: ${event.dates.start.localDate}</span>
            </div>
          </div>
  
          <div class="comments">
            <h2>Comments</h2>
            <ul>
              <li>Date and comments</li>
              <li>Date and comments</li>
              <li>Date and comments</li>
            </ul>
          </div>
          <form>
            <h2>Add new comment</h2>
            <label for="name">
              <input type="text" name="name" id="name" placeholder="Your name" required/>
            </label>
            <label for="comment">
              <textarea name="commen" id="comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
            </label>
            <input type="button" value="Comment" class="btn" />
          </form>`;
    }
  });
  popUp.innerHTML = view;
};

export default modalDisplay;
