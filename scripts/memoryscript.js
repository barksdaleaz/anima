// set up text to print, each item in array is new line
var aText = new Array(
    "Suddenly you remember. You were working on a panacea that would help cure the disease that currently plagued the world. You had forgotten an ingredient in the recipe. You walked past the mess of vines, and found the fountain you were looking for. However, it was dry. \n" +
    "\n" +
    "You tried looking for a water source and found three faucets. \n" +
    "The first had a pacifier. The second had a line with an x. The last had a mirror. Could there be clues in the rooms you’d been in? \n"
    + "You suddenly come to a realization. 6/19 was your birthdate, Magnolia was your name.\n"
);
var bText = new Array(
    "But what did the mirror mean? Use the URL to answer it.\n"
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
   setTimeout("typewriter2()", 1000);
  }
 } else {
  setTimeout("typewriter2()", iSpeed);
 }
}


typewriter();
typewriter2();
