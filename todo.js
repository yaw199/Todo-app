// SELECTORS//

const inputValue = document.querySelector(".input-text");
const circleAdd = document.querySelector(".circle");
const todoContainer = document.querySelector(".todo-value-container");
const orderedList = document.querySelector(".ulist");
const numberOfItem = document.querySelector(".items-left");
const listFooter = document.querySelector(".list-footer");
const themeColor = document.querySelector(".svg-toggle");
const moonSVG = document.querySelector(".moon-svg")
const svgCheck = document.querySelector(".svg-toggle")
const itemNumDisplay = document.querySelector(".media-item-left")
const mediaFooter = document.querySelector(".media-footer");
const lastBtn = document.querySelector(".last-bottom-p");

// ADDEVENTLISTENER//
circleAdd.addEventListener("click",()=>{

    if (inputValue.value === "")return

    createTags()

});

// ADD ENTER KEY//

inputValue.addEventListener("keydown", (event)=>{
    if (event.keyCode===13){
        circleAdd.click();
    }
})


// THEME TOGGLE//

themeColor.addEventListener("click",()=>{
    const todoBackground = document.querySelector(".todo-background")
    const imageContainer = document.querySelector(".image-container")
    const footerList = document.querySelector(".list-footer");
    const fNodes = document.querySelectorAll(".p1");
   
    
    
     
//   TOGGLE DARK AND LIGHT CLASSES//
    todoBackground.classList.add("todo-background-light");
    imageContainer.classList.add("image-container-light")
    inputValue.classList.add("input-text-light")
    circleAdd.classList.add("circle-light")
    footerList.classList.add("list-footer-light")
    fNodes[1].classList.add("p1-light")
    fNodes[2].classList.add("p1-light")
    fNodes[3].classList.add("p1-light")
    moonSVG.classList.add("moon-svg-active")
    svgCheck.classList.add("svg-toggle-active")
    mediaFooter.classList.add("media-footer-light")
    lastBtn.classList.add("last-bottom-p-light", "p1-light")
    pmLight.classList.add("pm1-light")
    
})


moonSVG.addEventListener("click",function(){
   const todoBackground = document.querySelector(".todo-background")
    const imageContainer = document.querySelector(".image-container")
    const footerList = document.querySelector(".list-footer");
    const fNodes = document.querySelectorAll(".p1");
     const pmLight = document.querySelectorAll(".pm-light")
    
     
//   TOGGLE DARK AND LIGHT CLASSES//
    todoBackground.classList.remove("todo-background-light");
    imageContainer.classList.remove("image-container-light")
    inputValue.classList.remove("input-text-light")
    circleAdd.classList.remove("circle-light")
    footerList.classList.remove("list-footer-light")
    fNodes[1].classList.remove("p1-light")
    fNodes[2].classList.remove("p1-light")
    fNodes[3].classList.remove("p1-light")
    moonSVG.classList.remove("moon-svg-active")
    svgCheck.classList.remove("svg-toggle-active")
    mediaFooter.classList.remove("media-footer-light")
    lastBtn.classList.remove("last-bottom-p-light", "p1-light")
    
})

// WINDOWS RESIZE FOR MEDIA QUERY//
window.addEventListener("resize",function(){
     const pmLight = document.querySelectorAll(".pm-light")
    if (window.screen.width <=575){
       themeColor.addEventListener("click",function(){
        pmLight.classList.add("pm1-light")
       }) 
    }
})

 
 
//  FUNCTION//
function createTags(){

    // CREATE ELEMENT AND TAGS//
const listElement = document.createElement("li");
const circleDiv = document.createElement("div");
const spanText = document.createElement("span");

spanText.textContent = inputValue.value;

// APPEND ELEMENTS//
listElement.appendChild(circleDiv);
listElement.appendChild(spanText);
orderedList.appendChild(listElement);

// EMPTY INPUTVALUE//
inputValue.value ="";

// SETUP SVGs//

// CHECKSVG JS CODE//
const checkSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
const path1 = document.createElementNS("http://www.w3.org/2000/svg","path");

checkSVG.setAttribute("width","11px")
checkSVG.setAttribute("height","19px")

path1.setAttribute("fill", "none")
path1.style.stroke ="#FFF";
path1.style.strokeWidth = "2px";
path1.setAttribute("d", "M1 4.304L3.696 7l6-6")

checkSVG.appendChild(path1)
listElement.appendChild(checkSVG);

// CROSS-SVG JS CODE//
const crossSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
const path2 = document.createElementNS("http://www.w3.org/2000/svg","path");

crossSVG.setAttribute("width","18px")
crossSVG.setAttribute("height","18px")

path2.style.fill = "#494C6B"
path2.setAttribute("fil-rule", "evenodd")
path2.setAttribute("d","M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z");

crossSVG.appendChild(path2)
listElement.appendChild(crossSVG)
// ADD CLASSES//
circleDiv.classList.add("circle-li");
checkSVG.classList.add("check");
crossSVG.classList.add("cross");

// THEME EVENT
themeColor.addEventListener("click",function () {
    if(!listElement.classList.contains("li-light")){
listElement.classList.add("li-light")
circleDiv.classList.add("circle-li-light")
    }
    else{
      listElement.classList.remove("li-light")
circleDiv.classList.remove("circle-li-light")
    }
});

// svgCheck.addEventListener("click",function(){
// listElement.classList.remove("li-light")
// circleDiv.classList.remove("circle-li-light")
// })

// DRAG AND DROP//

new Sortable (orderedList, {animation:150})
listElement.setAttribute("draggable","true");


// CONDITION FOR SVGs//
circleDiv.addEventListener("click",()=>{
    circleDiv.classList.toggle("circle-background");
    spanText.classList.toggle("list-strike");
    checkSVG.classList.toggle("check-active");   
});

crossSVG.addEventListener("click",()=>{
    orderedList.removeChild(listElement);
    checkNumber()
    mediaItemNumber()
    footerShow()
    mediaShow()
})

checkNumber()
footerShow()
mediaItemNumber()
mediaShow()



// FOOTER BUTTONS//
const pAll = document.querySelector(".p-all");
const pActive = document.querySelector(".p-active");
const pComplete = document.querySelector(".p-completed");
const pClear= document.querySelector(".p-clear");
const pArray = document.querySelectorAll(".p1");


pArray.forEach(function(item){
    item.addEventListener("click", function(){
        switch(item.innerText){
            case "All":
                pAll.style.color = "hsl(220, 98%, 61%)"
                listElement.style.display = "block";
                break;
            case "Active":
                
                if(!checkSVG.classList.contains("check-active")){
                    listElement.style.display = "block"
        
                    checkNumber()
                }
                else{
                    listElement.style.display = "none";
        
                }
                break;
            case "Completed":
                

                if(checkSVG.classList.contains("check-active")){
                    listElement.style.display = "block";
                  
                }
                
               else{
                   listElement.style.display="none"
               }

                break;

                case "Clear Completed":
                    if (checkSVG.classList.contains("check-active")){
                      orderedList.removeChild(listElement) 
                      checkNumber() 
                      mediaItemNumber()
                      footerShow()
                      mediaShow()
                    }
                break;

                default: 
                return
        }
    })
})

}

// DISPLAY NUMBER OF ITEMS//
function checkNumber(){
    let lenNum = orderedList.childElementCount
    if(lenNum===0){
      numberOfItem.innerText = ""
    }
     else if(lenNum===1){
    numberOfItem.innerText = `${lenNum} item left`
    }
    else{
        numberOfItem.innerText = `${lenNum} items left`
    } 
    
}

// SHOWING FOOTER//
function footerShow(){
    let lenNum = orderedList.childElementCount
    if(lenNum>0){
        listFooter.classList.add("footer-opacity");
    }
    else{
        listFooter.classList.remove("footer-opacity"); 
    }
}
 

// MEDIA QUERY SHOWING FOOTER//

function mediaItemNumber(){
    let lenNum = orderedList.childElementCount
    if(lenNum===0){
      numberOfItem.innerText = ""
    }
     else if(lenNum===1){
    itemNumDisplay.innerText = `${lenNum} item left`
    }
    else{
        itemNumDisplay.innerText = `${lenNum} items left`
    } 

}

// MEDIA FOOTER SHOW//
function mediaShow(){
    let lenNumber = orderedList.childElementCount
    if(lenNumber>0){
      mediaFooter.classList.add("media-footer-on")
      lastBtn.classList.add("last-bottom-p-on")
    }

    else{
        mediaFooter.classList.remove("media-footer-on")
      lastBtn.classList.remove("last-bottom-p-on")
    }

}