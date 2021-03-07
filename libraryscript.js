// set up text to print, each item in array is new line
var aText = new Array(
  "After turning the knob six times and magnifying the image 19x, you hear a strange rumbling sound.",
  "A shelf in the back slides to the left, revealing another room.",
  "You enter into a dim room full of bookcases.",
  "A strange meditative music plays in the background as the lamps flicker.",
  "Maybe one of these books will reveal more information about why you are here."
);
// var aText = new Array(
// "Short test",
// );
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();

function volFunction() {
      var vol = prompt("enter a vol number","0");
      if(vol=='6') {
          text = "correct";
    }
        else{
          text = "Try again...";
        }

        document.getElementById("demo").innerHTML = text;
}

function chpFunction() {
      var chp = prompt("enter a chp number","0");
      if(chp=="19") {
          text = "correct";
    }
        else{
          text = "Try again...";
        }

        document.getElementById("demo2").innerHTML = text;
}

function pgFunction() {
      var page = prompt("enter a chp number","0");
      if(page=='98') {
          text = "correct";
    }
        else{
          text = "Try again...";
        }

        document.getElementById("demo3").innerHTML = text;
}


function hintFunction() {
    var hint = prompt("Hint? y/n","y");
    if(hint=='y') {
      text = "if you got all the correct vol/chp/pg #, follow cirrus through entering an url... that is made up with vol/chp/pg # format: ";
      }
    document.getElementById("hint").innerHTML = text;
  }
