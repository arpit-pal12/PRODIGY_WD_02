import { city } from "./city.js";
import {popularcity} from "./popularCity.js"
import { restaurant } from "./restaurant.js"
import { topRestaurant } from "./topRestaurant.js"
import {cityName} from "./citydataexplore.js"


let localitiesContainerE1 = document.querySelector(".localities_container")
let htmlloacalitiesList =city.map((e1)=>{
    return`
        <div class="localities_list">
            <div class="lacalities_card">
                <h3> ${e1.name}</h3>
                <p>${e1.place ? e1.place + "places" : ""} </p>

            </div>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        `

}).join("")

localitiesContainerE1.innerHTML = htmlloacalitiesList


    function showData(clickId,displayId,toggle,data,join){
        document.getElementById(clickId).addEventListener("click",()=>{
            if(toggle){
            document.getElementById(displayId).style.display ="block"
            toggle = false
           
            }
            else{
             document.getElementById(displayId).style.display ="none"
             toggle = true
      
            }
          })

          let popularCityHTMLLInk = "";

   for(let i =0;i< data.length; i++){
   // console.log(popularcity[i])
    popularCityHTMLLInk += `
    <a class="popularcityName" href=${data[i].link}>${data[i].decs}</a>
    <span class="dot">${join}</span>

    `
   }

   document.getElementById(displayId).innerHTML = popularCityHTMLLInk

    }


    let toggle1= true;
    showData("popularCityListID","popularcityId",toggle1,popularcity,"•")
  
  
    let toggle2 = true;
      showData("restaurantID","restaurantDisplayDataID",toggle2,restaurant,"•")

     console.log(topRestaurant)
     let toggle3 = true;
      showData("topRestaurantID","TopRestaurantDisplayID", toggle3,topRestaurant,"   ")
      let toggle4 = true;
      showData("citydeliverId","cityDeliverDisplayID", toggle4,cityName,"  ")  
  
