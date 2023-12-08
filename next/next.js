var page = document.querySelector("div.page");
onload = function() {
    page.innerHTML += main_and_mujhe;
    page.innerHTML += "<hr>";
    page.innerHTML += urdu_pronouns;
    collapse();
};

function collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}