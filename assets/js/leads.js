var data = {
  0:["Chris Kuszmaul","Head Coach","ckuszmaul@palyrobotics.com"],

  1:["Kenny Cheung","Team Captain","kcheung@palyrobotics.com"],
  
  2:["Simran Pujji","Assistant Captain","spujji@palyrobotics.com"],
  
  3:["Jonathan Zwiebel","Project Manager","jzwiebel@palyrobotics.com"],

  4: ["James Ngo","Chief Glue","jngo@palyrobotics.com"],

  5:["Lauren Nolen","Strategic Director","lnolen@palyrobotics.com"],

  6:["Devin Ardeshna","Build Captain","dardeshna@palyrobotics.com"],
  
  7:["Nihar Mitra","Programming Captain","nmitra@palyrobotics.com"],
  
  8:["Charlotte Brownell","Design Captain","cbrownell@palyrobotics.com"],
  
  9:["Annalee Soohoo","Business Captain","asoohoo@palyrobotics.com"],
  
  10:["Maya Chin","Art Captain","mchin@palyrobotics.com"],

  11:["Madeline Li","Web Captain","mli@palyrobotics.com"],

  12:["Liam Sherlock","Competition Manager","lsherlock@palyrobotics.com"],
  
  13:["Shota Yamamoto","Lab Manager","syamamoto@palyrobotics.com"],

  14:["Eddie Shi","Pit Manager","eshi@palyrobotics.com"],
  
  15:["Kendall Shaw","Treasurer","kshaw@palyrobotics.com"]
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var size = Object.size(data);
var numberOfItems = 4;
var rows = Math.ceil(size / numberOfItems);
var innerHTML = "";
var currentRow = 1;


var indexArr = [];
for (var i = 0; i < rows; i++){
	var innerArr = [];
	for (var ix = (i * numberOfItems); ix < ((i + 1) * numberOfItems); ix++){
		if(ix < size){
			innerArr.push(ix);
		}
		
	}
	indexArr.push(innerArr);
	
}
var innerHTML = "";
for (var i = 0; i < indexArr.length; i++){
	innerHTML += "\n<div class=\"row\">";
	var itemsArr = indexArr[i];
	for (var ix = 0; ix < itemsArr.length; ix++){
		innerHTML += "\n<div class=\"col-md-3\">\n<img src=\"images/placeholder-200x200.jpeg\" class=\"img-circle center-block\" />\n<div class=\"name-and-role\">";
		innerHTML += "\n<p class=\"name\">" + data[(itemsArr[ix])][0] + "</p>";
		innerHTML += "\n<p class=\"role\">" + data[(itemsArr[ix])][1] + "</p>";
		// innerHTML += "<i class=\"glyphicon glyphicon-envelope\"></i>"
		// innerHTML += "<a href=\"mailto:" + data[(itemsArr[ix])][1] + "\" class=\"glyphicon glyphicon-envelope\">"
		innerHTML += "\n</div>\n</div>";
	}
	innerHTML += "\n</div>";

}
console.log(innerHTML);

var current = "none";
function hideDescription(param){
	if (current == "none"){
		current = param;
	}else if(current == param){
		current == "none";
	}else{

		// document.getElementById("#" + current).aria-expanded = false;
		// document.getElementById("#" + current + "a").aria-expanded = false;
		document.getElementById(current).className = document.getElementById(current).className.replace( /(?:^|\s)in(?!\S)/g , '' );
		document.getElementById(current + "a").className = document.getElementById(current + "a").className.replace( /(?:^|\s)in(?!\S)/g , '' );
		current = param;
	}
