function get_card_category(cat) {
    var card = `
  <div class="card" id="${cat.id}">
   <div img_wrapper><img src="images/${cat.id}.jpeg" alt="Avatar" /></div>
   <div class="container">
    <p><b>${cat.name}</b></p>
    <p class="cat-id">${cat.id}</p>
   </div>
 </div>
`;
    return card;
}

function get_vocabularies_template(voc) {
    console.log("get_vocabularies_template()...");
}

function get_top_bar() {
    var html = `
 <div class="tab">
  <button id="${category.lessons[0]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[0]
        .id}')">${category.lessons[0].name}</button>
  <button id="${category.lessons[1]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[1]
        .id}')">${category.lessons[1].name}</button>
  <button id="${category.lessons[2]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[2]
        .id}')">${category.lessons[2].name}</button>
  <button id="${category.lessons[3]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[3]
        .id}')">${category.lessons[3].name}</button>
  <button id="${category.lessons[4]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[4]
        .id}')">${category.lessons[4].name}</button>
  <button id="${category.lessons[5]
      .id}" class="tablinks" onclick="openLesson(event, '${category.lessons[5]
        .id}')">${category.lessons[5].name}</button>
</div>
 `;
    document.querySelector(".nav-header").innerHTML = html;
}

function get_word_template_table() {
    console.log("get_word_template_table()....");
    console.log('lesson: ', lesson);
    console.log('and quizzes object contains: ', quizzes);
    var const_audio_portion = "https://d13tz37rv54ob.cloudfront.net/ur/";
    var const_image_portion =
        "https://d37sy4vufic209.cloudfront.net/phrase-images/";
    var totalwords = 0;
    if (quizzes[0].alts.length) {
        totalwords = quizzes[0].alts.length;
    }
    console.log('totoalwords = ', totalwords);

    var html = `
<div class="tg-wrap">
<table>
<thead>
  <tr>
    <th class="target-head">الكلمة</th>
    <th class="mother-head">المعنى</th>
    <th class="audio-head">النطق</th>
    <th class="image-head">صورة</th>
  </tr>
</thead>
<tbody>`;
    for (var i = 0; i < totalwords; i++) {
        html += `
  <tr>
    <td class="target">${quizzes[0].alts[i].text}</td>
    <td class="mother">${quizzes[0].sols[i].text}</td>
    <td class="audio"><i class="fa fa-play"></i><audio preload="metadata"  src='${const_audio_portion +
    quizzes[0].alts[i].key +
    "?t=" +
    quizzes[0].alts[i].audio_updated_at}' 
      type='audio/mp3'>Your browser not supported</audio></td>
    <td class="image"><img src='${const_image_portion +
    quizzes[0].alts[i].image}' /></td>
  </tr>  
  `;
    }
    html += `
</tbody>
</table>
</div>
`;
    console.log('finish filling words table....');
    document.querySelector(".content-wrapper").innerHTML = html;

    //-------------- append phrases/examples data: --------
    // var phrases_index = [1, 3, 4, 5, 7, 8];
    var phrases = ``;
    var row = ``;
    for (var i = 0; i < quizzes.length; i++) {
        if ("alts" in quizzes[i]) {
            if (quizzes[i].alts.length == 3) {
                for (var k = 0; k < 3; k++) {
                    row = `
    <div class="row">
     <div class="cell index" width="20px">${i} - ${quizzes[i].type}</div>
     <div class="cell target">${quizzes[i].alts[k].text}</div>
     <div class="cell mother">${quizzes[i].sols[k].text}</div>
     <div class="cell audio">
        <i class="fa fa-play"></i><audio preload="metadata"  src="${const_audio_portion +
            quizzes[i].sols[k].key +
            "?t=" +
            quizzes[i].sols[k]
              .audio_updated_at}" type='audio/mp3'>Your browser not supported
        </audio>
     </div>
    </div>
   `;
                    phrases += row;
                }
            }
        }
    }

    // append to 'div.quizzes' element

    document.querySelector(".quizzes").innerHTML = phrases;

    // add event listner to all fa-play icons to play next audio
    //+ element

    document.querySelectorAll("td.audio,.cell.audio").forEach(function f(elem) {
        elem.addEventListener("click", playAudio);
    });
} // end of get_word_template_table

function playAudio(target) {
    var elem = target.currentTarget;
    var audioElem = elem.querySelector("audio");
    console.log(audioElem);
    audioElem.play();
}