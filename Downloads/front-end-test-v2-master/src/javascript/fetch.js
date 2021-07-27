/* Global Initial Variables*/

var total_cost=0;//variable to save the amount of money to pay
var available_cars=[]; // array with the available_cars
var state=1; //variable that saves the state of the page 1 is visible and 0 is not visible (width<1024px)

fetch('./mocks/list.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {

          document.getElementsByClassName("loader")[0].style.display = "none";
          for(var i = 0; i < data.length; i++) // Assign array indexes to variable i
          {
            var new_car= new Car(data[i].name,data[i].price,data[i].priceFormatted,data[i].imagePath);
            new_car.show_car();
            available_cars.push(new_car);
          }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
