$(document).ready(function() {
 var entryCount = 0;2
 var displayCount = 0;

//capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

//translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

//capture function keys
  $(document).on("keydown", function(e) {

//deleting letters
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });
});
function deleteElement() {
  $(".inner").last().remove();
}

//replacing letters
function createElement(k) {
  var elem = $('#container');

    if (k == "a" || k == "A") { elem.append('<span class="inner">⛺️</span>');}
  
    if (k == "b" || k == "B") { elem.append('<span class="inner">👍</span>');}
    
    if (k == "c" || k == "C") { elem.append('<span class="inner">🥐</span>');}
    
    if (k == "d" || k == "D") { elem.append('<span class="inner">🌛</span>');}
    
    if (k == "e" || k == "E") { elem.append('<span class="inner">📧</span>');}
    
    if (k == "f" || k == "F") { elem.append('<span class="inner">🎏</span>');}
    
    if (k == "g" || k == "G") { elem.append('<span class="inner">🗜</span>');}
    
    if (k == "h" || k == "H") { elem.append('<span class="inner">🚧</span>');}
    
    if (k == "i" || k == "I") { elem.append('<span class="inner">📍</span>');}
       
    if (k == "j" || k == "J") { elem.append('<span class="inner">🎷</span>');}
    
    if (k == "k" || k == "K") { elem.append('<span class="inner">🎋</span>');}
    
    if (k == "l" || k == "L") { elem.append('<span class="inner">🛴</span>');}
    
    if (k == "m" || k == "M") { elem.append('<span class="inner">〽️</span>');}
    
    if (k == "n" || k == "N") { elem.append('<span class="inner">📈</span>');}
    
    if (k == "o" || k == "O") { elem.append('<span class="inner">💿</span>');}
    
    if (k == "p" || k == "P") { elem.append('<span class="inner">🅿️</span>');}
    
    if (k == "q" || k == "Q") { elem.append('<span class="inner">🔍</span>');}
    
    if (k == "r" || k == "R") { elem.append('<span class="inner">®️</span>');}
    
    if (k == "s" || k == "S") { elem.append('<span class="inner">⚡</span>');}
    
    if (k == "t" || k == "T") { elem.append('<span class="inner">🌴</span>');}
    
    if (k == "u" || k == "U") { elem.append('<span class="inner">🐋</span>');}
    
    if (k == "v" || k == "V") { elem.append('<span class="inner">✔️</span>');}
    
    if (k == "w" || k == "W") { elem.append('<span class="inner">〰️</span>');}
    
    if (k == "x" || k == "X") { elem.append('<span class="inner">⚒️</span>');}
    
    if (k == "y" || k == "Y") { elem.append('<span class="inner">🍸</span>');}
    
    if (k == "z" || k == "Z") { elem.append('<span class="inner">💤</span>');}
    
    if (k == " ") { elem.append('<span class="inner"><img src="images/SPACE.png"></span>'); }
}

//numbers change colors
 $(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 48) {
     $("body").css("background-color","#FFCBD3");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 49) {
     $("body").css("background-color","#C6E3A1");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 50) {
     $("body").css("background-color","#dcd0ff");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 51) {
     $("body").css("background-color","#FFFF94");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 52) {
     $("body").css("background-color","#3f94d1");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 53) {
     $("body").css("background-color","#cd7b16");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 54) {
     $("body").css("background-color","#C40000");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 55) {
     $("body").css("background-color","#89e9f0");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 56) {
     $("body").css("background-color","#539742");
   }
  });

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 57) {
     $("body").css("background-color","#a45d6e");
   }
  });


//emojis -> letters
var translation = {
    "⛺️" : "A",
    "👍" : "B",
    "🥐" : "C",
    "🌛" : "D",
    "📧" : "E",
    "🎏" : "F",
    "🗜" : "G",
    "🚧" : "H",
    "📍" : "I",
    "🎷" : "J",
    "🎋" : "K",
    "🛴" : "L",
    "〽️" : "M",
    "📈" : "N",
    "💿" : "O",
    "🅿️" : "P",
    "🔍" : "Q",
    "®️" : "R",
    "⚡" : "S",
    "🌴" : "T",
    "🐋" : "U",
    "✔️" : "V",
    "〰️" : "W",
    "⚒️" : "X",
    "🍸" : "Y",
    "💤" : "Z",   
}

$(document).keydown(function(keyPressed) {
if (keyPressed.keyCode == 13) {
var allSpans = document.querySelectorAll(".inner");
for(var i = 0; i < allSpans.length; i++){
console.log(allSpans[i].innerHTML);
var content = allSpans[i].innerHTML;
var t = translation[content];
if(t !== undefined) {allSpans[i].innerHTML = t;}
}
}
});



