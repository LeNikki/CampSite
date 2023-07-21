
function like(id){
    var likes = document.querySelectorAll(".likes");
    var num = parseInt(likes[id].innerHTML)
    num+=1;
    likes[id].innerHTML=num;
}

function unlike(id){
    var likes = document.querySelectorAll(".likes");
    likes.forEach((state)=>{
        var num = parseInt(likes[id].innerHTML)
        num-=1;
        likes[id].innerHTML=num;
    })
       
}




/**
 * Carousel
 */

const carousel = document.querySelector(".reviews-cont");
// const arrowLeft = document.querySelector(".angle-left");
// const arrowRight = document.querySelector(".angle-right");
const arrowIcons = document.querySelectorAll(".fa-angle-left, .fa-angle-right");

const firstImg = carousel.querySelectorAll("img")[0];

let isDragstart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14 //getting first img width then adding 14 to the value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons=()=>{
    arrowIcons[0].style.display = carosel.scrollLeft == 0? "none" : "block";
    arrowIcons[1].style.display = carosel.scrollLeft == 0? "none" : "block";
}
arrowIcons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        //If clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "angle-left" ? - firstImgWidth : firstImgWidth;
        setTimeout(()=> showHideIcons(), 60); //calling showHidIcons after 60ms
       
    })
   
})
//updating global variables value on mouse down event
const dragStart =(e)=>{
    isDragstart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

//scrolling images/carousel to left according to mouse pointer
const dragging = (e)=>{
    if(!isDragstart) return;
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft=prevScrollLeft - positionDiff;
}

const dragStop = ()=> {
    isDragstart = false;
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);

