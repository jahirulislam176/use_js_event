
//add to cart Event
function Cart(){
    alert("Cart System Not Working");
}
//cart details Message onclick
function car_details(){
    alert("Car Details");
}
//category system onclick
function category(){
    alert("Category System Coming Soon");
}
//price System mouseover
function price(){
    var discount=document.querySelector("#discount_price");
    discount.innerHTML="20% Discount For New Year";
}
//contact page country background change
// function changecolor(color){
//     document.getElementById('onchange').style.background=color;
// }
//contact page input add keydown event
function inputfunction(){
    alert("please require your data");
}
//contact page name field  add keyup event
function inputname(){
    var name=document.getElementById("fname");
    name.value=name.value.toUpperCase();
}
//add load event contact page
function loadpage(){
    alert("page loaded Successfully");
}
//add load event login page
function loadlogin(){
    alert("Login page load Successfully");
}
//home page car detaila section color change
function mouseDown(){
    document.getElementById("details1").style.color="white";
    
}

function onmouseUp(){
    document.getElementById("details1").style.color="black";
}
//add event in login page for input required
function logininput(){
    var log=document.getElementById("myinput").value;
    document.getElementById("wrote").innerHTML="You wrote"+log;
}
//for home page which type Event car setion
function myFunction(event) {
    var x = event.type;
    document.getElementById("demo").innerHTML = x;
  }
  //contact page onsubmit successfully event add
  function myFunction1() {
    alert("SignUp Successfully");
  }
 
  
  //add event onkeydown for wrote
  function myFunction2(event) {
    var x = event.key;
    document.getElementById("demo").innerHTML = "The pressed key1 was: " + x;
  }
  function myFunction(event) { 
    alert(event.target.nodeName);
  }