
function workfunction(){
var century = parseInt(document.getElementById("century"))
var year = parseInt(document.getElementById("year"))
var month = parseInt(document.getElementById("month"))
var date = parseInt(document.getElementById("date"))
}


function workfunction(){
document.getElementById('form').submit()
var day = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )% 7;
return(math.floor(day))

}
var maleNames = ["Kwasi", "Kwasi", "Kwebena", "Kwaku", "Yaw", "Kofi", "Kwame",]
var femaleNames = ["Akosua", "Adwona", "Abenaa", "Akua", "Yaa", "Afua", "Ama",]


var gender = document.getElementByName("gender");{
if(gender[0].checked == true){
var gender = "male"
}else if(gender[1].checked == true){
var gender ="female"
}else console.log("gender")
}


switch(gender){
case "male":
if(day == 0){console.console.log();("sunday + maleNames")}
else if(day == 1){console.log("monday + maleNames")}
else if(day == 2){console.log("tuesnday + maleNames")}
else if(day == 3){console.log("wednesday + maleNames")}
else if(day == 4){console.log("thursday + maleNames")}
else if(day == 5){console.log("friaday + maleNames")}
else if(day == 6){console.log("saturday + maleNames")
}
break


case "female":
if(day == 0){console.console.log("sunday + femaleNames")}
else if(day == 1){console.log("monday + femaleNames")}
else if(day == 2){console.log("tuesnday + femaleNames")}
else if(day == 3){console.log("wednesday + femaleNames")}
else if(day == 4){console.log("thursday + femaleNames")}
else if(day == 5){console.log("friaday + femaleNames")}
else if(day == 6){console.log("saturday + femaleNames")}
default
console.log("workfunction")
