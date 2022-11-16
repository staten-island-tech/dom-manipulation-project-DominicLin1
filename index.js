const DOMSelectors =  {
    submit: document.getElementById("btn"),
    title: document.getElementById("title"),
    input: document.querySelector("form-input"),
  text: document.querySelector("text"),
  display: document.querySelectorAll("display"),
  artist: document.getElementById("artist"),
  url:document.getElementById("url"),

};
console.log(DOMSelectors.submit);



DOMSelectors.submit.addEventListener("submit", function (){
  let input = DOMSelectors.input.value;
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend"
    `<p> ${title} ${artist} ${url}</p>`
  );
});