const DOMSelectors =  {
    submit: document.getElementById("btn"),
    title: document.getElementById("title"),
  text: document.querySelector("text"),
  display: document.querySelectorAll("display"),
  artist: document.getElementById("artist"),
  url:document.getElementById("url"),
  form:document.getElementsByClassName("text-box")

};
console.log(DOMSelectors.submit);



DOMSelectors.form.addEventListener("submit", function (){
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
   `<p> ${title} ${artist} ${url} </p>`
  );
  console.log(title);
console.log(artist);
console.log(url); 
 
console.log(`${title} ${artist} ${url}`)
});
