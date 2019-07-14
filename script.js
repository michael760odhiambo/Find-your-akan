var century, year, month, date, day;



century = document.getElementById('century').value
year = document.getElementById('year').value
month = document.getElementById('month').value
date= document.getElementById('date').value
day = document.getElementById('day').value


function cal(){

  day = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )% 7;


}

function calradio(){
  if(century < 19|| > 20){
  alert("your value is invalid")}

}else if (year <= 89 || ) {
  alert("enter a valid year")

}else if (month <=1 && =>12) {
  alert("your value is in valid")

}else if (date < 1 >31) {
  alert("your value is in valid")

}

var radio = getElementsByName('gender'){
  if (gender[0].checked === true) {
    gender = "male"

  }else if (gender[1].checked === true) {
    gender = "female"

  }else{
    console.log("submit")
  }
}

var male = "true";
if (day===0) {
  console.log("you were born on sunday and your name is kwasi")
} else if (day===1) {
  console.log("you were born on monday and your name is kwadwo")
}if (day===2) {
  console.log("you were born on tuesday and your name is kwabena")
}if (day===3) {
  console.log("you were born on wednesday and your name is kwaku")
}if (day===4) {
  console.log("you were born on thursday and your name is yaw")
}if (day===5) {
  console.log("you were born on friaday and your name is kofi")
}if (day===6) {
  console.log("you were born on saturday and your name is kwame")
}

}

}
var female = "true";
if (day===0) {
  console.log(alert("you were born on sunday and your name is Akosua"))

} else if (day===1) {
  console.log("you were born on monday and your name is Adwoa")
}if (day===2) {
  console.log("you were born on tuesday and your name is Abenaa")
}if (day===3) {
  console.log("you were born on wednesday and your name is Akua")
}if (day===4) {
  console.log("you were born on thursday and your name is Yaa")
}if (day===5) {
  console.log("you were born on friaday and your name is Afua")
}if (day===6) {
  console.log("you were born on saturday and your name is Ama")
}

}

}
