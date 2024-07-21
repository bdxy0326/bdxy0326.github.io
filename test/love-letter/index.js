function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
}
var flag = true;
domReady(() => {
    document.getElementsByClassName("card").item(0).addEventListener("click", function(){
        document.getElementsByClassName("modal").item(0).classList.add("is-visible");
    })
    document.getElementsByClassName("modal").item(0).addEventListener("click", function(e){
        if(e.target.classList.contains("is-visible")){
            e.target.classList.remove("is-visible");
        }
    })
});


document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("audio");
  
  function playMusic() {
    document.removeEventListener("click", playMusic);
    audio.play();
    audio.addEventListener("ended", function() {
      audio.currentTime = 0;
      audio.play();
    });
  }
  // 用户操作触发播放音频
  document.addEventListener("click", playMusic);
});