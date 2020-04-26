// ----------add new div rows and also add event listener to the delete button in each div----------
$('.new').on('click', function() {

  var newEle = '<div class="row"> <input type="text" name="subject" value="" placeholder="Subject name"> <input type="number" name="grade" min="0" max="10" value="" placeholder="Grade Point*"> <input type="number" name="credits" min="0" value="" placeholder="Credits*"> <button type="button" class="bin"><i class="fa fa-trash" aria-hidden="true"></i></button> </div>';
  $('.new').before(newEle);
  $('.bin').on('click', function() {
    // var deleteid=this.id;
    // $('#r'+deleteid).remove
    this.parentNode.remove();
  })
})

// ----------call to calculate result if any input is empty then show alert---------------
$('.calc').on('click', function() {
  result = calculate();
  if (result) {
    $('h1.result').text("SGPA: " + result);
  }
})

// --------read input>convert it into array>calculate SGPA and return value----------
function calculate() {
  var credits = [];
  var grade = [];
  var totalcr = 0;
  var ercr = 0;
  var combcr = [];
  var gr = document.getElementsByName("grade");
  var cr = document.getElementsByName("credits");
  for (var i = 0; i < gr.length && i < cr.length; i++) {
    if (gr[i].value == "" || cr[i].value == "") {
      alert("Please fill all inputs fields. (Subject name is optional)");
      return false;
    }
    grade[i] = Number(gr[i].value);
    credits[i] = Number(cr[i].value);
  }
  for (var i = 0; i < credits.length; i++) {
    combcr[i] = credits[i] * grade[i]
  }
  for (var i = 0; i < credits.length; i++) {
    totalcr += credits[i];
    ercr += combcr[i]
  }
  return (ercr / totalcr).toFixed(2);
}
