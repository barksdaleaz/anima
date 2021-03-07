function dateFunction()
  {
    var dateInput = prompt("Enter the date: ","0/0");
    if(dateInput == "6/19")
    {
      text = "knowledge";
  
  
    }
    else
    {
      text = "Try again...";
    }
    
}

// set up text to print, each item in array is new line
var aText = new Array(
"With the smell and taste of the mysterious liquid hitting your senses, you suddenly feel an urge to vomit.",
"You stagger out through the doors of the kitchen to get outside.",
"However, the doors opened to a strange room. This looks like...",
"some kind of laboratory?",
"There are several tables with beakers and research notes scattered all over.",
"At the center of the table is a large microscope."
);
var bText = new Array(
"You open the drawer under the microscope to find some slides.",
 "Maybe there will be a clue that can be observed?"
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

// ----------- //
