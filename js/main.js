// GO!

// TASK 1 -- Show/Hide Nav

var menu = document.querySelector('.first-button');
var nav = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
	nav.classList.toggle('nav-menu-hidden');
});

// TASK 2 -- Select an Icon

var x = document.querySelectorAll('.wish-list div');
x.forEach(function(e){
	e.addEventListener('click', function(n){
		y = n.currentTarget;
		y.classList.toggle('selected');
	});
});

// TASK 3 -- Move Item From List to List

var pointNumber = document.querySelectorAll('.point');
var result = document.querySelector('.total-points');
pointNumber.forEach(function(e){
	e.addEventListener('click', function(n){
		var total = parseInt(result.textContent);
		var sum = parseInt(n.target.textContent);
		total = total + sum;
		result.textContent = total; 
	});
});

// TASK 4 -- Add Guest to List

var listGS = document.querySelector('.good-standing-list');
var listPL = document.querySelector('.probation-list');
var listEachGS = document.querySelectorAll('.good-standing-list');
var listEachPL = document.querySelectorAll('.probation-list');

listEachGS.forEach(function(item){
	item.addEventListener('click',function(e){
		listGS.removeChild(e.target);
		listPL.appendChild(e.target);
	});
});

listEachPL.forEach(function(item){
	item.addEventListener('click', function(e){
		listPL.removeChild(e.target);
		listGS.appendChild(e.target);
	});
});


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

var colorBox = document.querySelectorAll('.palette span');
var textParagraph = document.querySelector('.msg'); 
// console.log(textParagraph);
colorBox.forEach(function(item){
	item.addEventListener('click', function(e){
		textParagraph.className = "msg " + e.target.className;
	});
});





