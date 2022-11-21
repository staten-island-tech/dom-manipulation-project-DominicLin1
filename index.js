const DOMSelectors =  {
    submit: document.getElementById("btn"),
    title: document.getElementById("title"),
  text: document.querySelector("text"),
  display: document.querySelectorAll("display"),
  artist: document.getElementById("artist"),
  url:document.getElementById("url"),
  form:document.getElementById("form"),
box: document.getElementById("box"),
byebye: document.getElementsByClassName("remove btn")
};
console.log(DOMSelectors.submit);



DOMSelectors.form.addEventListener("submit", function (event){
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
event.preventDefault();
});

DOMSelectors.byebye.addEventListener("submit", function remove(event){
  
});

function html(){

  const card = {
     title: DOMSelectors.title.value,
artist: DOMSelectors.artist.value,
 url: DOMSelectors.url.value
}
DOMSelectors.box.insertAdjacentHTML(
  "afterend",
`<div class="display-card">
    <img class="display-img" src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"/>
    <h2 class="display-artist">${card.artist}</h2>
    <h3 class="display-album">${card.title}</h3>
    <h3 class="display-url">${card.url}</h3>
     <button class="remove btn">Remove Album</button>
</div>`)
};