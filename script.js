window.onload =  async function(){

 //Carregar dados da internet (data.json)
 let request = await fetch("data.json");
let audioData =  await request.json();





    //variaveis
    let title = document.querySelector("#title");
    let previousButton = document.querySelector("#previous-button");


    let playButton = document.querySelector ("#play-pause");
    let nextButton = document.querySelector ("#next-button");

    let volumeButton = document.querySelector ("#volume-input");
    let scrubInput = document.querySelector ("#scrub-input");

    let fileinput = document.querySelector("#file-input");
    

    let audio = document.querySelector("Audio")
    let currentMusic = 0;
    console.log(audioData [currentMusic]);    
    
    //funções

    function changetitle(value){
    title.innerText=value;
    }
    function updateInputBar(value , bar ){
        bar.style.transform = "scaleX(" +value /100 + ")";
    }
    audio.onplay = function()
    {
        console.log ("audio está a tocar");
    }
    function playAudio( ){

        audio.src = audioData[currentMusic].url
        audio.play()
    }
    function pauseAudio(){
        audio.pause ();
    }
    
    previousButton.onclick = function() {
        console.log("previous button cliked");
    }
    playButton.onclick = function(){
        if (audio.paused){
            playAudio()
        } else { 
            pauseAudio()
        }
    }
    audio.onplay = function(){
        let playIcon = document.querySelector("#icon-play");
        let pauseIcon = document.querySelector("#icon-pause")
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }
    audio.onpause = function (){
        let playIcon = document.querySelector("#icon-play");
        let pauseIcon = document.querySelector("#icon-pause")
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";

    }

    nextButton.onclick = function() {
        console.log("next button clicked");
    }
    scrubInput.querySelector("input").oninput = function(event) {
        let bar = scrubInput.querySelector(".range-bar");
        updateInputBar(event.target.value, bar);
    }
    volumeButton.querySelector("input").oninput = function(event) {
        let bar = volumeButton.querySelector(".range-bar");
        updateInputBar(event.target.value, bar);

    }
    fileinput.oninput = function(){
        console.log("aqui!");
    }

}
    
    