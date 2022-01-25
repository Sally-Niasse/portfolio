 //Variables popup
 const popupmpg = document.getElementById("mpg")
 const popupcv = document.getElementById("cv")
 const popuphexa = document.getElementById("hexa")
 const popupmotion = document.getElementById("motion")
 const popupformation = document.getElementById("formation")
 const popupblog = document.getElementById("blog")
 const popupshoot = document.getElementById("shoot")

 
//Variables open button

 var btnMpg = document.getElementById("btn-mpg")
 var btnCv = document.getElementById("btn-cv")
 var btnHexa = document.getElementById("btn-hexa")
 var btnMotion = document.getElementById("btn-motion")
 var btnFormation = document.getElementById("btn-formation")
 var btnBlog = document.getElementById("btn-blog")
 var btnShoot = document.getElementById("btn-shoot")

//Variables close button
var closeMpg = document.getElementById("close-mpg")
 var closeCV = document.getElementById("close-cv")
 var closeHexa = document.getElementById("close-hexa")
 var closeMotion = document.getElementById("close-motion")
 var closeFormation = document.getElementById("close-formation")
 var closeBlog = document.getElementById("close-blog")
 var closeShoot = document.getElementById("close-shoot")
// var closeButton = document.querySelector(".close-button")

//Variables popup close
 var popupClose = document.querySelectorAll(".popup")
 
//Function
function open(x){
 x.classList.remove("hide");
}
function close(y){
 y.classList.add("hide");
}
//Clic
 btnCv.addEventListener("click", e =>{
       open(popupcv)
   });
   btnMotion.addEventListener("click", e =>{
       open(popupmotion)
   });
   btnHexa.addEventListener("click", e =>{
       open(popuphexa)
   });
   btnMpg.addEventListener("click", e =>{
       open(popupmpg)
   });
   btnFormation.addEventListener("click", e =>{
       open(popupformation)
   });
   btnBlog.addEventListener("click", e =>{
       open(popupblog)
   });
   btnShoot.addEventListener("click", e =>{
      open(popupshoot)
  });
//Fermeture des popups
   closeCV.addEventListener("click", e =>{
         close(popupcv);
   });
   closeMotion.addEventListener("click", e =>{
         close(popupmotion);
   });
   closeHexa.addEventListener("click", e =>{
         close(popuphexa);
   });
   closeMpg.addEventListener("click", e =>{
         close(popupmpg);
   });
   closeFormation.addEventListener("click", e =>{
         close(popupformation);
   });
   closeBlog.addEventListener("click", e =>{
         close(popupblog);
   });
   closeShoot.addEventListener("click", e =>{
         close(popupshoot);
   });
