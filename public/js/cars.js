"use strict";

var pageNumber = 3;
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";


function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var htmlString = '<div class="row">';

  // carsJSON.forEach(function(car, index){
    // htmlString = htmlString + '<div class="col-md-4 car"><h2>'+car.Make+'</h2><p><strong>Model:</strong> '+car.Model+'</p><p><strong>Year:</strong> '+car.Year+'</p></div>';
  // })
  $.each(carsJSON, function(index, car) {
  htmlString += '<div class="col-md-4 car"><h2>'+car.Make+'</h2><p><strong>Model:</strong> '+car.Model+'</p><p><strong>Year:</strong> '+car.Year+'</p></div>';
    });
  htmlString += '</div>';
  return htmlString;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: baseUrl + pageNumber + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  })
  pageNumber = (parseInt(pageNumber) + 1).toString();
}

