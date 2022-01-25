/*Variables*/
const slide = document.querySelector(".slide")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
/*Counter*/
var counter = 1;

/*Click Event*/
nextBtn.addEventListener("click", ()=>{
    var width = slide.clientWidth;
    slideLeftRight(width, counter)
    counter++
    if (counter ==6){
        restart(1)
    }
    
    console.log(counter)
    console.log(width)

})
prevBtn.addEventListener("click", ()=>{
    var width = slide.clientWidth;
    slideLeftRight(width,counter);
    if (counter ==0){
        restart(5)
    }
    counter--;
    console.log(counter)

    // console.log(slide.style.transform="translateX("+ (-width*counter) +"px)")

})

/* Translate Function */
function restart(nbr){
 slide.style.transform="translateX(0)";
 slide.style.transition="300ms ease-in-out";
 counter=nbr;
}

function slideLeftRight(width, counter){
    slide.style.transform="translateX("+ (-width*counter) +"px)";
    slide.style.transition="300ms ease-in-out";   
}