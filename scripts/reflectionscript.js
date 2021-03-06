// set up text to print, each item in array is new line
var aText = new Array(
  "Once the water flowed into the fountain, you could see your reflection clearly. Your name was Magnolia. \n" +
    "I’m Magnolia. \n"
);
var bText = new Array(
"Memories about yourself flooded to your mind suddenly. " +
    "Magnolia is you, and YOU are Magnolia; June 19th is your birthday, " +
    "your favorite Disney character is Mulan... All the facts that you tried " +
    "to deny earlier because of low-self-esteem has come back… You are soon relieved. " +
    "This is me, a gemini who is named after a flower, Magnolia. " +
    "Magnolia symbolizes dignity and a noble soul. " +
    "That’s why you like Mulan --- not just because of your similar names. " +
    "Mulan is a character with self-determination and a strong-mind --- " +
    "you always admire her femininity. " +
    "Became proud of yourself as a female and of who you are."
);
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
 iArrLength = bText[iIndex].length;
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
