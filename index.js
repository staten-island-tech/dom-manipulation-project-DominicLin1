const DOMSelectors =  {
    button: document.getElementsByClassName("btn"),
    title: document.getElementById("title"),
    box : document.getElementsByClassName("text-box"),
    input: document.querySelector(`#input`)

};
console.log(DOMSelectors);



DOMSelectors.button.addEventListener("click", function (){
  let input = DOMSelectors.input.value;
  console.log(input);
});