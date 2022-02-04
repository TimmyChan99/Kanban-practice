const modalDisplay = (id) => {
  const listItems = document.querySelectorAll('.the_event');
  const popUp = document.querySelector('.modal-content');
  let view = '';
  listItems.forEach((event) => {
    if (event.id === id) {
      view += `
          <div class="img-contianer">
            <img src=${event.childNodes[1].childNodes[3].src} alt="" />
            <p class="close-btn">&times;</p>
          </div>
  
          <div class="modal-info">
            <h2>${event.children[1].children[0].textContent}</h2>
  
            <div class="modal-classification">
              <span> ${event.children[1].children[1].textContent}</span>
              <span>Date: ${event.children[1].children[2].textContent} </span>
            </div>
          </div>
  
          <div class="comments">
            <h2 class="comment-header">Comments</h2>
            <ul class="comments-sect">
            </ul>
          </div>
          <form id='comment-form'>
            <h2>Add new comment</h2>
            <span class='validate-message'>message</span>
            <label for="name">
              <input type="text" name="name" id="name" placeholder="Your name" required/>
            </label>
            <label for="comment">
              <textarea name="commen" id="comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
            </label>
            <button type="button" class="btn">Comment</button>
          </form>`;
    }
  });
  popUp.innerHTML = view;
};

export default modalDisplay;
