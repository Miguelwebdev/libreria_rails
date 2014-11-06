var list = document.getElementById("listalibros");
var input = document.getElementById("entradalibros");
var bookList = JSON.parse(localStorage.getItem('Libros'))  || [];
for(var i=0; i<bookList.length; i++){
	addnewbook(bookList[i].name);
}


function addlibro(event){

	if ( window.event.keyCode == 13) {
		addnewbook(input.value)
		var newBook = { name: input.value, votes: 0};
		bookList.push(newBook);
		var newBookstr = JSON.stringify(bookList);
		localStorage.setItem("Libros", newBookstr);
	}
}
document.onkeypress=addlibro;

function addnewbook (value){
	var newLI = document.createElement("li");
	var votebutton =document.createElement("div");
	newLI.classList.add("added");
	
	votebutton.classList.add("votes");

		newLI.innerText=value;
		listalibros.appendChild(newLI);
		
		newLI.appendChild(votebutton);

}