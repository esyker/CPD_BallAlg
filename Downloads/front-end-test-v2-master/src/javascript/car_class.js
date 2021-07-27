var total_cost=0;//variable to save the amount of money to pay
var available_cars=[]; // array with the available_cars
var state=1; //variable that saves the state of the page 1 is visible and 0 is not visible (width<1024px)

class Car {//class to save each car info, wich is going to be fetched by fetch.js

  constructor(car_name,car_price,car_price_formatted,img_src) {
    this.car_name =car_name;
    this.car_price=parseFloat(car_price);
    this.car_price_formatted=car_price_formatted;
    this.img_src=img_src;
    this.state=0;// 0 is equivalent no not selected and 1 to selected
  }


  show_car() { //method that appends
    const ul=document.getElementById("car_list");
    const li =document.createElement("li");
    //Create car name
    const div1 = document.createElement("div");
    div1.className="car_name";
    div1.innerHTML =this.car_name;
    //Create image
    const img=document.createElement("img");
    img.src = this.img_src;
    img.alt =this.car_name;
    //Car_price
    const div2 = document.createElement("div");
    div2.className="car_cost";
    div2.innerHTML =this.car_price_formatted;
    //Create button
    const btn = document.createElement("button");
    btn.innerHTML = "Add to Shopping Bag";

    li.id=this.car_name;
    li.appendChild(div1);
    li.appendChild(img);
    li.appendChild(div2);
    li.appendChild(btn);

    btn.onclick = function(){

      for(var i=0;i<available_cars.length;i++)
      {
        if(available_cars[i].car_name===this.parentNode.id)
        {
          var targetDiv = document.getElementById(this.parentNode.id).getElementsByClassName("car_cost")[0];

          if(available_cars[i].state===0)
          {
              available_cars[i].state=1;
              total_cost=total_cost+available_cars[i].car_price;
              total_cost=Number(parseFloat(total_cost).toFixed(2));
              this.innerHTML="Remove from Shopping Bag";
              targetDiv.style.color='white';
              targetDiv.style.backgroundColor="#2a2a2a";
          }
          else{
            available_cars[i].state=0;
            total_cost=total_cost-available_cars[i].car_price;
            total_cost=Number(parseFloat(total_cost).toFixed(2));
            this.innerHTML="Add to Shopping Bag";
            targetDiv.style.color="#333";
            targetDiv.style.backgroundColor='white';
          }

          const cost =document.getElementById("cost");
          var str_cost = total_cost.toString();
          cost.innerHTML=str_cost.concat("€");
          break;
        }
      }
    };

    ul.appendChild(li);
  }
}
