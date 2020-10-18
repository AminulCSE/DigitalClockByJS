window.onload = function(){
	var el1 = document.querySelector('.hours .val');
	var el2 = document.querySelector('.minutes .val');
	var el3 = document.querySelector('.seconds .val');

	setInterval(function(){
		var now = new Date();

		el1.innerHTML = now.getHours();
		el2.innerHTML = now.getMinutes();
		el3.innerHTML = now.getSeconds();

	}, 1000)
}