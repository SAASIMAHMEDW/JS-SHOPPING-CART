
// ====================== HOME JS CONNECTION=============================
let con = document.getElementById("data")
let cards = document.getElementsByClassName("card")
let counterConnectin = document.querySelector(".counter")

let showIframe = document.querySelector(".frame")
// let imgSource
// let imgHeading
// let imgPrice
// let imgQuantity
// console.log(con.textContent)
// ======================== COMMON JS CONNECTION=============================
let quantityCounter = document.getElementById("data")
let price = document.getElementById("price")


// ======================== CART JS CONNECTION=============================
// let cartQuantityCounter = document.querySelectorAll("#cartData")
// console.log(cartQuantityCounter)
let cartPrice = document.getElementById("cartPrice")
let priceSymbol = "₹"
// let cartTempQuantity = Number.parseInt(cartQuantityCounter.innerText)
// let cartTempPrice = Number.parseInt(cartPrice.textContent.replace("₹",""))
let card = document.getElementById("mainCard")
let disapear = document.getElementsByClassName("totalPrice")[0]
let cartInfo = document.getElementsByClassName("cartInfo")
let itemCard = document.querySelector(".cartContainer")
let setCartImg
let setCartHeading
let setCartPrice
let setCartQuantity
// <<<<<<<<<<<<<<<<<=====================>>>>>>>>>>>>>>>


// ======================== HOME JS=============================

function show(){
    showIframe.style.display = "block";

}

function counterIcrem(num){
    let temp = Number.parseInt(counterConnectin.textContent)
    let f = temp + Number.parseInt(num)
    counterConnectin.textContent = f
}


// console.log(cards)
function homeIncreaseQuantity(){
    let activeNode = document.activeElement.nextElementSibling.textContent
    let activeNodeINCRX = document.activeElement.nextElementSibling
    // console.log(activeNode)
    let temp = (Number.parseInt(activeNode)) + 1
    activeNodeINCRX.textContent = temp
    // let homeQuantityCounter = Number.parseInt(con.textContent)
    // con.textContent = homeQuantityCounter
    // let newTempPrice
    // newTempPrice+=tempPrice
    // tempQuantity+=1
    // quantityCounter.innerHTML=tempQuantity
    // price.textContent = newTempPrice+priceSymbol
}

function homeDecreaseQuantity(){
    let activeNode = document.activeElement.previousElementSibling.textContent
    let activeNodeDECX = document.activeElement.previousElementSibling
    // console.log(activeNode)
    if (activeNode <= 0) {
        alert("CANNOT DECREASE ITEM QUANTITYT")
    }
    else{
        let temp = (Number.parseInt(activeNode) - 1)
        activeNodeDECX.textContent = temp
    }
    // if(tempPrice<=0){
    //     alert("CANNOT DECREASE PRICE")
    // }
    // else{
    //     tempPrice -= tempPrice
    //     price.textContent = tempPrice+priceSymbol
    // }
}

// ======================== COMMON JS=============================

function getItem(){
    let dataList = []
    let dataNode = document.activeElement.parentNode.parentNode.childNodes
    for (let i = 0; i < dataNode.length; i++) {
        // console.log(dataNode[i])
        if (i==1 || i==3) {
            dataList.push(dataNode[i])
        }
    }
    // =========home js=======
    let imgSource = (dataList[0].src.slice(21,)).replace("%","")
    let imgHeading = dataList[1].children[0].textContent
    let imgPrice = dataList[1].children[2].textContent
    let imgQuantity = dataList[1].children.data.textContent
    
    setCard(imgSource,imgHeading,imgPrice,imgQuantity)
    let countrerNum = document.activeElement.parentNode.parentNode.children[1].children[6].textContent

    counterIcrem(countrerNum)
    // let dataNodeXXConn = document.activeElement.parentNode.parentNode.children[1].children[6]
    // console.log(dataNodeXX)

    // createCart()
    // console.log(imgSource)
    // console.log(imgHeading)
    // console.log(imgPrice)
    // console.log(imgQuantity)
    // console.log(data[1].children[0])
    // console.log(data[1].children[1])
    // console.log(data[1].children[2])
    // console.log(dataNode)
    // console.log(x.length)
    // return data 
    // console.log(data[0].src)

    // ==========cart js ===========

    // console.log(cartInfo[0].children[0].src)
    // console.log(itemCard.children[1].children[1].textContent)
    // console.log(itemCard.children[0].children[0].children[1].children[0])
    // console.log(itemCard.children[0].children[0].children[1].children[1].children[0])

    // =========addem==========
    
    // setCartImg = imgSource
    // setCartHeading = imgHeading
    // setCartPrice = imgPrice
    // setCartQuantity = imgQuantity

}

// console.log(imgSource)




// ======================== CART JS=============================

// console.log(price.textContent.replace("₹",""))
// let child = card.childNodes
// console.log(card.firstElementChild)
// console.log(card.hasChildNodes())
// dis.style.display = "none";
//new
// console.log(cartInfo[0].children[0].src)
// cartInfo[0].children[0].src=imgSource
// console.log(cartInfo[0].children[0].src)


// console.log(itemCard)
// console.log(itemCard.cloneNode(true))

function cartIncreaseQuantity(){
    let activeNodeINCR = document.activeElement.parentElement.children[1].textContent
    let activeNodeINCRX = document.activeElement.parentElement.children[1]
    // console.log(activeNodeINCR)
    let temp = Number.parseInt(activeNodeINCR)
    temp+=1
    activeNodeINCRX.textContent = temp

    // createCart()
    // console.log(document.activeElement)
    // for (let i = 0; i < cartQuantityCounter.length; i++) {
    //     // console.log(document.activeElement.parentElement.children[1])
    //     // let activeNodeINCR = document.activeElement.parentElement.children[1].textContent
        // let temp = Number.parseInt(activeNodeINCR)
        // temp+=1
        // cartQuantityCounter[i].textContent = temp
    // }
    // let newTempPrice
    // newTempPrice+=cartTempPrice
    // let x = Number.parseInt((document.activeElement.parentElement.children[1].textContent))+1
    // console.log(x)
    // let activeNode = document.activeElement.parentNode.parentNode.children[1].children[1].textContent
    // console.log(activeNodeINCR)
    // // let q = activeNode.textContent = temp
    // // let quantity = cartTempQuantity+=1
    // price.textContent = newTempPrice+priceSymbol
}

function cartDecreaseQuantity(){
    // console.log(document.activeElement.children)
    // let activeNode = document.activeElement.parentNode.parentNode.children[1].children[1].textContent
    // for (let i = 0; i < cartQuantityCounter.length; i++) {
    let activeNodeDEC = document.activeElement.parentElement.children[1].textContent
    let activeNodeDECX = document.activeElement.parentElement.children[1]
    // console.log(activeNodeDEC)
    if (activeNodeDEC<=0) {
        // alert("mo")
        // alert("CANNOT DECREASE ITEM QUANTITYT")
        // let tempChild = card.firstElementChild
        let remCart = document.activeElement.parentElement.parentElement
        // console.log(remCart)
        card.removeChild(remCart)
        // card.removeChild(tempChild)
        if(Number.parseInt(card.children.length)<=0){
            disapear.style.display = "none";
            nothingIsThere()
        }
    }
    else{
        // let quantity = cartTempQuantity-=1
        // let activeNode = document.activeElement.parentNode.parentNode.children[1].children[1].textContent
        let temp = (Number.parseInt(activeNodeDEC))
        temp-=1
        activeNodeDECX.textContent=temp
    }
// }
    // if(tempPrice<=0){
    //     alert("CANNOT DECREASE PRICE")
    // }
    // else{
    //     tempPrice -= tempPrice
    //     price.textContent = tempPrice+priceSymbol
    // }
}


function booked(){
    let conStatus = confirm("DO YOU WANT TO CONFIRM YOUR ORDER")
    if(conStatus){
        alert("ORDER PLACED")
    }
    else{
        alert("ORDER NOT PLACED")
    }
}

// card.addEventListener("click",removeCard)
function removeCard(){
    // console.log(document.activeElement.parentElement.parentElement.parentElement.parentElement)
    let remCart = document.activeElement.parentElement.parentElement.parentElement.parentElement
    // let tempChild = card.firstElementChild
    // card.removeChild(tempChild)
    card.removeChild(remCart)
    if(Number.parseInt(card.children.length)<=0){
        disapear.style.display = "none";
        nothingIsThere()
    }
        // console.log(card.children.length)
    }
  
function nothingIsThere(){
    let h1 = document.createElement("h1")
    let text = document.createTextNode("<<<======YOUR CART IS EMPTY======>>>")
    h1.appendChild(text)
    card.appendChild(h1)
}

function createCart(){
    let clonedCart = itemCard.cloneNode(true)
    console.log(clonedCart)
}   

function setCard(img,head,price,quantity){
    // setCartImg = itemCard.children[0].children[0].children[0].src
    // setCartHeading = itemCard.children[0].children[0].children[1].children[0].textContent
    // setCartPrice = itemCard.children[0].children[0].children[1].children[1].children[0].textContent
    // setCartQuantity=itemCard.children[1].children[1].textContent
    // img = itemCard.children[0].children[0].children[0].src = imgSource
    // head = itemCard.children[0].children[0].children[1].children[0].textContent = imgHeading
    // price = itemCard.children[0].children[0].children[1].children[1].children[0].textContent = imgPrice
    // quantity =itemCard.children[1].children[1].textContent = imgQuantity
    console.log(img,head,price,quantity)
}






function test(){
    // dataItemList[0][0] = imgSource
    // dataItemList[0][1] = imgHeading
    // dataItemList[0][2] = imgQuantity
    // dataItemList[0][3] = imgPrice
    let srcx = itemCard.children[0].children[0].children[0].src
    srcx = dataItemList[0][0]
    let srcxx = itemCard.children[0].children[0].children[0]
    srcxx.textContent=srcx 

    let headx = itemCard.children[0].children[0].children[1].children[0].textContent
    console.log(headx)
    let headxx = itemCard.children[0].children[0].children[1].children[0] 
    console.log(headxx)
    headx = dataItemList[0][1]
    console.log(headx)
    headxx.textContent = headx
    console.log(headxx)
    let pricex = itemCard.children[0].children[0].children[1].children[1].children[0].textContent
    let pricexx = itemCard.children[0].children[0].children[1].children[1].children[0]
    let quantityx = itemCard.children[1].children[1].textContent
    let quantityxx = itemCard.children[1].children[1]
    let totalx = itemCard.children[2].textContent
    let totalxx = itemCard.children[2]
    // console.log(itemCard.children)
    // console.log(itemCard.children[2].textContent)
    console.log(srcxx)
}
