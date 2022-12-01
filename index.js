const DOMSelectors =  {
    submit: document.getElementById("btn"),
    title: document.getElementById("title"),
  text: document.querySelector(`#text`),
  display: document.getElementById("display"),
  artist: document.getElementById("artist"),
  url:document.getElementById("url"),
  form:document.getElementById("form"),
box: document.getElementById("box"),
byebye: document.getElementById("remove btn")

};


DOMSelectors.form.addEventListener("submit",
function bigC(event){
  event.preventDefault();
  insert();

  
 
})
function insert(){
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  makecard()
}
      
        function makecard(){
          const card = {
            title: DOMSelectors.title.value,
       artist: DOMSelectors.artist.value,
        url: DOMSelectors.url.value
         }
         DOMSelectors.display.insertAdjacentHTML(
          "afterend",

         `<div class="display-card">
              <img class="display-img" src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"/>
              <h2 class="display-artist" id= "display-artist">${card.artist}</h2>
              <h3 class="display-album" id="display-album">${card.title}</h3>
              <h3 class="display-url" id="display-url">${card.url}</h3>
               
          </div>`)
        }

let button = document.getElementById("remove btn")
        button.addEventListener("click",
        function bye(event){
        remove()
        const element= document.getElementById("display-card");
        button.closest("div").remove();

     event.preventDefault
    
        })
        function remove(){
          DOMSelectors.title.value= "";
          DOMSelectors.artist.value= "";
          DOMSelectors.url.value= "";
      
        } 