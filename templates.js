function get_card_category(cat) {

  var card = `
  <div class="card" id="${cat.id}">
   <div img_wrapper><img src="img_avatar2.png" alt="Avatar" style="width: 100%" /></div>
   <div class="container">
    <h4><b>${cat.name}</b></h4>
    <p class="cat-id">${cat.id}</p>
   </div>
 </div>
`;

  return card;
}

