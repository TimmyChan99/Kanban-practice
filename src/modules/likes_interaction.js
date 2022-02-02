
// send like to the API
const sendlikes = async (id) => {
    const api = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fJYfkFeKFk1eEpS2TLrj/likes/";
    const url = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({
            "item_id": id,
        }),
        headers: {
             'Content-type': 'application/json; charset=UTF-8',
        },
});

 }

const heartReact = (target) => {
       
    if (target.getAttribute('data-prefix') === 'far'){
        target.setAttribute('data-prefix', 'fas');
    } 
}

// Get likes from API 

const getLikes = async () => {
    const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fJYfkFeKFk1eEpS2TLrj/likes/';
    const getLikes = await fetch(apiLikes);
    const likesNumber = await getLikes.json();
    
    likesNumber.sort((a, b) => {
        return a.item_id - b.item_id;
      });      
      
    return likesNumber;
}

// Update API 

const updateLikes = async (span, id) => {
    const likesNumber = await getLikes();
    likesNumber.forEach(item => {
        if(item.item_id == id) {
          span.innerHTML = item.likes + 1;
        }
     });
}


 export { sendlikes, heartReact, updateLikes, getLikes };
