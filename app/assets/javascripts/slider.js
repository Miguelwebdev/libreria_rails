var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "../imagenes/libro_corredor.jpg";
path[1] = "../imagenes/libro_rubius.jpg";
path[2] = "../imagenes/libro_calle.jpg";
path[3] = "../imagenes/libro_umbral.jpg";
path[4] = "../imagenes/libro_urbrands.jpg";
path[5] = "../imagenes/libro_musica.jpg";
path[6] = "../imagenes/libro_amame.jpg";
path[7] = "../imagenes/libro_adulterio.jpg";


function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;