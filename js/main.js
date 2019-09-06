
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeyup = function(e) {
    if(e.keyCode == 32 && body.classList.contains("dragscroll") == false){
        function add() {
            var body = document.getElementById("body");
            body.classList.add("dragscroll");
          }
        add();
    } else if(e.keyCode == 32 && body.classList.contains("dragscroll") == true) {
        function remove() {
            body.classList.remove ("dragscroll");
          }
        remove();
    }
};

