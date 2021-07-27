function window_resize(){

  const mq = window.matchMedia( "(min-width: 1024px)" );

  var elems = document.body.getElementsByTagName("*"); // array with all the elements that exist in the page

  if (mq.matches && state===0) {//make state visible

    document.body.style.backgroundColor = "white";

    for(var i=0;i<elems.length;i++)
    {
      //show the elements
      document.getElementsByClassName("loader")[0].style.display = "none";
      if(elems[i].id!="small_screen_message")
      {
          elems[i].style.display = '';
      }
      else
      {
        elems[i].remove();
      }
    }
    state=1;

  }
  else if( !mq.matches && state===1){
    //hide the elements
    for(var i=0;i<elems.length;i++)
    {
      if(elems[i].id!="small_screen_message")
      {
          elems[i].style.display = "none";
      }
      else
      {
        elems[i].remove();
      }
    }
    const message_element= document.createElement("h1");
    message_element.innerHTML="I look much better in a wide window ;)";
    message_element.id="small_screen_message";
    document.body.style.backgroundColor = "black";
    document.body.appendChild(message_element);
    state=0;

  }
}
