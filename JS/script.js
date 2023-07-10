
const iPrice = document.querySelectorAll(".itemPrice")
const iName = document.querySelectorAll(".cardHeading")

function clicked(){
    window.onclick = e=>{
        console.log(e.target.className)
        // console.log(e.target.tagName)
        // console.log(e.target.innerText)
    }
}


function getItemPrice(){
    console.log("NULL")
}
const itemNamePrice = {}


for(let i=0; i<iPrice.length;i++){
        itemNamePrice[iName[i].innerText] = iPrice[i].innerText
}
// console.table(itemNamePrice)
