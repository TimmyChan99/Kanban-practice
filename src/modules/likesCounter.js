export const likesCounter = (items, id, span) => {
  items.forEach((item) => {
    if (item.item_id == id) {
      item.likes += 1;
      span.innerHTML = item.likes;
    }
  });
};