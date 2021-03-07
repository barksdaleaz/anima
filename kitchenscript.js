// set up text to print, each item in array is new line
var aText = new Array(
"You wake up confused on the cold, hard tiles. Your head hurts and your body feels weak.",
"You try to remember something, anything. But everything comes up blank. ",
"Your name, what you were doing here, where you were... You couldn't remember anything",
"You stumble and look around to see the cabinets of a fancy kitchen.",
"On the calendar hanging on the wall, you see a big red circle around June 19, with the words “23rd Birthday!” next to it.",
"Is that even today’s date? Whose birthday was it?",
"Next to your body, you see a half-spilled bottle of wine. You lift it up and smell the contents, grimacing at the stench.",
"Certainly doesn’t smell like wine...You read the label...MOSCATO...."
);
var iSpeed = 50; // time delay of print out
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
