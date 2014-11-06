
var listInputs = document.getElementsByClassName('dimInput');
var textArea = document.getElementsByClassName('content');
var addList = document.getElementById('idbutton');  
var divPrueba = document.getElementById('divprueba'); 
var input = document.getElementsByClassName('jTexto');

var eventList = JSON.parse(localStorage.getItem('Events'))  || [];

for(var i=0; i<eventList.length; i++){
	addNewEvent(eventList[i].name);
}

	function addEvent(event){

		/*if(window.addList.event.onclick){*/
		addNewEvent(input.value);
		var newEvent = { name: eventName.value, 
			place: eventPlace.value, date: eventDate.value, 
		    user: nameUser.value};
		eventList.push(newEvent);
		var newEventstr = JSON.stringify(eventList);
		localStorage.setItem("Events", newEventstr);
	//}
}

 function addNewEvent(value)
{
	

		var i = 0;
		while (i < listInputs.length)
		{
			var newLi = document.createElement('p');
			newLi.textContent = listInputs[i].value; //con textContent, rellleno con texto(que es el valor del otro lado de la igualdad)	
			newLi.classList.add("input2");
			divPrueba.appendChild(newLi);		
					
			
			i = i + 1;
		}  
 		
 		var newTextArea = document.createElement('p');
 		newTextArea.textContent = textArea.eventContent.value;
 		newTextArea.classList.add("input3");
 		divPrueba.appendChild(newTextArea);

 };														


addList.onclick = addEvent;
