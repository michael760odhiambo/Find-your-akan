//get input
function getInput(){
var century = parseInt(document.getElementById("century"))
var year = parseInt(document.getElementById("year"))
var month = parseInt(document.getElementById("month"))
var date = parseInt(document.getElementById("date"))
}

//calculate day of the week
function calculate(){
getInput();
var day = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )% 7;
return(math.floor(day))
}
var maleNames = ["Kwasi", "Kwasi", "Kwebena", "Kwaku", "Yaw", "Kofi", "Kwame",]
var femaleNames = ["Akosua", "Adwona", "Abenaa", "Akua", "Yaa", "Afua", "Ama",]

//radio button
var rads = document.getElementByName("gender");{
if(gender[0].checked == true){
var gender = "male"
}else if(gender[1].checked == true){
var gender ="female"
}else console.log("pass")
}

//assining akan names and days of birth
switch(gender){
case "male":
if(day == 0){document.write("sunday + maleNames")}
else if(day == 1){document.write("monday + maleNames")}
else if(day == 2){document.write("tuesnday + maleNames")}
else if(day == 3){document.write("wednesday + maleNames")}
else if(day == 4){document.write("thursday + maleNames")}
else if(day == 5){document.write("friaday + maleNames")}
else if(day == 6){document.write("saturday + maleNames")
}


case "female":
if(day == 0){document.write("sunday + femaleNames")}
else if(day == 1){document.write("monday + femaleNames")}
else if(day == 2){document.write("tuesnday + femaleNames")}
else if(day == 3){document.write("wednesday + femaleNames")}
else if(day == 4){document.write("thursday + femaleNames")}
else if(day == 5){document.write("friaday + femaleNames")}
else if(day == 6){document.write("saturday + femaleNames")}


//break
default
console.log(getInput)
//call all function in html btn
