

const sendlikes = async (id) => {
    const api = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R5uHxKZNUcWGP0nFHGNS/likes/";
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

const updateLikes = async () => {
    const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R5uHxKZNUcWGP0nFHGNS/likes/';
    const getLikes = await fetch(apiLikes);
    const likesNumber = await getLikes.json();
    const span = document.querySelectorAll('.number_of_likes');
    
    span.forEach((event, i) => {
        event.innerText = likesNumber[i].likes;
    })
}

 export { sendlikes, heartReact, updateLikes };