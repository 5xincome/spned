function changeText() {
    var btn = document.getElementById("btn");
    btn.innerHTML = "Generating Key";
    var dots = 0;
    var interval = setInterval(function() {
      if (dots < 3) {
        btn.innerHTML += ".";
        dots++;
      } else {
        btn.innerHTML = "Generating Key";
        dots = 0;
      }
    }, 500);
    setTimeout(function(){
      clearInterval(interval);
      btn.innerHTML = "Generate Key";
      alert("Key Generated!");
    }, 4000);
  }