// EXAMPLE #1
// Puts the button into a JS-variable.
var knapp = document.getElementById('knapp')

// Adds event for onclick behaviour.
knapp.onclick = function(e) {
  alert("Success, done with .onclick")
  e.stopPropagation()
 }


// EXAMPLE #2
// Puts the button into a JS-variable
var knupp = document.getElementById('knupp')

// Adds event for onclick behaviour
knupp.addEventListener('click', function(e){
  alert("Success, done with addEventListener");
  e.stopPropagation();
});



// EXAMPLE #3
// Puts the button into JS-variable
var knipp = document.getElementById('knipp')

// Adds function to be executed
function theClick(){
    alert("Success, also .onclick, but different way of executing function")
}

// Execute function theClick on onclick event
knipp.onclick = theClick;
