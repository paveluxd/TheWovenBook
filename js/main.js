
//Code that adds class to body to enable drag scrolling
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

// Code that connects paragraphs

document.body.onload = function(e){

  jsPlumb.connect({ 
      source:"p1-1",
      target:"p2-1",
      connector:[ "Straight" ],
      anchors:[ "RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p1-1",
      target:"p2-2",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p1-1",
      target:"p2-3",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p1-2",
      target:"p2-4",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  //C2 -> C3

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-1",
      connector:[ "Straight" ],
      anchors:[ "RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
    source:"p2-1",
    target:"p3-2",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-3",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-4",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-5",
      connector:[ "Straight" ],
      anchors:[ "RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
    source:"p2-1",
    target:"p3-6",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-7",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
      source:"p2-1",
      target:"p3-8",
      connector:[ "Straight" ],
      anchors:["RightMiddle", "LeftMiddle"],
      endpoint:["Rectangle", { width:5, height:5 }],  
  });

  jsPlumb.connect({ 
    source:"p2-1",
    target:"p3-9",
    connector:[ "Straight" ],
    anchors:["RightMiddle", "LeftMiddle"],
    endpoint:["Rectangle", { width:5, height:5 }],  
});

jsPlumb.connect({ 
    source:"p2-2",
    target:"p3-10",
    connector:[ "Straight" ],
    anchors:["RightMiddle", "LeftMiddle"],
    endpoint:["Rectangle", { width:5, height:5 }],  
});
  
};

