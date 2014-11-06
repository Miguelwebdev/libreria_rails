
var arrayLibros = document.getElementsByClassName('dimart');


	var rand_number = Math.floor(Math.random() * arrayLibros.length);
	var rand = arrayLibros[rand_number];    

	rand.classList.add("elegido");




