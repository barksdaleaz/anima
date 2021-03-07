// set up text to print, each item in array is new line
var aText = new Array("Suddenly you feel a strange sense of worry. The experiment! ",
                      "Something in your head shouts. You rush past the doors and past the hallways leading to the garden. ",
                      "But how did you know it was the garden?")
var bText = new Array("As you observe your new surroundings, you wonder if it could even be considered a garden. ",
                      "Dark vines coiled around cold, stone columns, and ancient trees leaned over as if threatening to smother you. ",
                      "In the center of the garden was a piece of parchment, with a strange symbol on it.",
                      "And on each column in the garden, there were letters. What could this mean? ")

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

function typewriter2()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext2");

 while ( iRow < iIndex ) {
  sContents += bText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + bText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != bText.length ) {
   iArrLength = bText[iIndex].length;
   setTimeout("typewriter2()", 500);
  }
 } else {
  setTimeout("typewriter2()", iSpeed);
 }
}


typewriter();
typewriter2();
