// set up text to print, each item in array is new line
var aText = new Array(
  "After turning the knob six times and magnifying the image 19x, you hear a strange rumbling sound.",
  "A shelf in the back slides to the left, revealing another room.",
  "You enter into a dim room full of bookcases.",
  "A strange meditative music plays in the background as the lamps flicker.",
  "Maybe one of these books will reveal more information about why you are here. But where should you look?"
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
      var vol = prompt("Enter a volume number","0");
      if(vol=='6') {
          text = "correct";
    }
        else{
          text = "Try again...";
        }

        document.getElementById("demo").innerHTML = text;
}

function chpFunction() {
      var chp = prompt("Enter a chapter number","0");
      if(chp=="19") {
          text = "correct";
    }
        else{
          text = "Try again...";
        }

        document.getElementById("demo2").innerHTML = text;
}

function pgFunction() {
      var page = prompt("Enter a page number","0");
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
      text = "State flower of Mississippi";
      }
    document.getElementById("hint").innerHTML = text;
  }

  const VideoController = function(isHovering, videoElement)
{
	if (isHovering == true)
    {
        videoElement.play();
    }
    else if (isHovering == false)
    {
        videoElement.pause();
    }
}
