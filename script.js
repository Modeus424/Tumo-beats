window.onload = function(){


    //variaves de elementos
   
    let title = document.querySelector("#title");
    title .innerText = "Hello";
    let previousButton = document.querySelector ("#previous-button");
    let playButton = document.querySelector ("#play-pause");
    let nextButton = document.querySelector ("#next-button");
   
//funções
    function changetitle(value){
    title.innerText=value;}


previousButton.onclick = function()
{ 
 console.log("previous button clicked");

}
    playButton.onclick = function(){
     console.log("play button")
    }
    
    nextButton.onclick = function()
    {
      console.log(" click the next button ")  
    }

}
