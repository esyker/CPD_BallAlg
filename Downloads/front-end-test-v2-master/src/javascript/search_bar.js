function myFilter() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue,strlen,message_element;

  input = document.getElementsByClassName('search_bar')[0];// get the search bar element input
  ul = document.getElementById("car_list"); // get the car list
  li = ul.getElementsByTagName('li');
  filter = input.value.toUpperCase();
  strlen=filter.length;

  if(strlen<3) // do not apply filter
  {

    message_element=document.getElementById("no_results_found");
    if(message_element) // remove no results found message
        message_element.parentElement.removeChild(message_element);
    for (i = 0; i < li.length; i++)
         li[i].style.display = ""; //display the list elements again

  }
  else {//apply filter

    var total_count=0;

    console.log(li);
    console.log(filter);
    console.log(li[0].id);
    console.log(li[0].id!=filter);
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      uppercase_name=li[i].id.toUpperCase();
      if (uppercase_name.indexOf(filter) > -1) {
         li[i].style.display = "";
         ++total_count;
       } else {
         li[i].style.display = "none";
      }
    }

    if(total_count==0) //create no results found message
    {
      message_element=document.getElementById("no_results_found");//create only if it wasn't already displaying "no_results_found"
      if(!message_element)
      {
        const message_div = document.createElement("div");
        message_div.id="no_results_found";
        message_div.innerHTML="No cars with that name were found :(";
        document.body.appendChild(message_div);
      }
    }
    else { //remove no results found message
      message_element=document.getElementById("no_results_found");
      if(message_element)
          message_element.parentElement.removeChild(message_element);
    }
  }

}
