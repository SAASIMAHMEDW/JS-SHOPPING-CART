
// ======================= ORACLE ============================
const dataItemList = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

// ====================== HOME JS CONNECTION=============================
let con = document.getElementById("data")
let cards = document.getElementsByClassName("card")
let counterConnectin = document.querySelector(".counter")
let showIframe = document.getElementById("toggleCart")
let toggleBlur = 0
// let showIframe = document.querySelector(".frame")

// let imgSource
// let imgHeading
// let imgPrice
// let imgQuantity

// ======================== COMMON JS CONNECTION=============================
let quantityCounter = document.getElementById("data")
let price = document.getElementById("price")


// ======================== CART JS CONNECTION=============================

let cartPrice = document.getElementById("cartPrice")
let priceSymbol = "₹"

let card = document.getElementById("mainCard")
let disapear = document.getElementsByClassName("totalPrice")[0]
let cartInfo = document.getElementsByClassName("cartInfo")
// let itemCard = document.querySelector(".cartContainer")
let itemCard = document.getElementsByClassName("cartContainer")[0]
// console.log(itemCard)
let insertCart = document.querySelector(".insertBeforeCart")
let setCartImg
let setCartHeading
let setCartPrice
let setCartQuantity
// <<<<<<<<<<<<<<<<<=====================>>>>>>>>>>>>>>>


// ======================== HOME JS=============================

function show(){
    // showIframe.style.display = "block";
    showIframe.classList.toggle("showHide")
    // counterConnectin.style.display = "none"

}

function counterIcrem(num){
    let temp = Number.parseInt(counterConnectin.textContent)
    let f = temp + Number.parseInt(num)
    counterConnectin.textContent = f
}



function homeIncreaseQuantity(){
    let activeNode = document.activeElement.nextElementSibling.textContent
    let activeNodeINCRX = document.activeElement.nextElementSibling

    let temp = (Number.parseInt(activeNode)) + 1
    activeNodeINCRX.textContent = temp

}

function homeDecreaseQuantity(){
    let activeNode = document.activeElement.previousElementSibling.textContent
    let activeNodeDECX = document.activeElement.previousElementSibling

    if (activeNode <= 0) {
        alert("CANNOT DECREASE ITEM QUANTITY")
    }
    else{
        let temp = (Number.parseInt(activeNode) - 1)
        activeNodeDECX.textContent = temp
    }
    
}

// ======================== COMMON JS=============================

function getItem(){
    let dataList = []
    let dataNode = document.activeElement.parentNode.parentNode.childNodes
    let checkAdd = dataNode[3].children[6].textContent
    if(checkAdd==0){
        alert("CANNOT ADD ZERO ITEM")
        return
    }
    for (let i = 0; i < dataNode.length; i++) {
       
        if (i==1 || i==3) {
            dataList.push(dataNode[i])
        }
    }
    // =========home js=======
    let imgSource = (dataList[0].src.slice(21,)).replace("%","")
    let imgHeading = dataList[1].children[0].textContent
    let imgPrice = dataList[1].children[2].textContent
    let imgQuantity = dataList[1].children.data.textContent
    
    // setCard(imgSource,imgHeading,imgPrice,imgQuantity)
    // dataItemList[0][0] = imgSource
    // dataItemList[0][1] = imgHeading
    // dataItemList[0][2] = imgQuantity
    // dataItemList[0][3] = imgPrice
    // console.log(dataItemList[0])

    // ========== home cart counter ============
    let countrerNum = document.activeElement.parentNode.parentNode.children[1].children[6].textContent
    counterIcrem(countrerNum)
    // ========= cart clone ===========
    // createCart()
    // ============== session storage ==============
    setLocalStorageItemData(imgSource,imgHeading,imgQuantity,imgPrice)
}


// ======================== CART JS========s=====================

function cartIncreaseQuantity(){
    let activeNodeINCR = document.activeElement.parentElement.children[1].textContent
    let activeNodeINCRX = document.activeElement.parentElement.children[1]
    let actualPrice = document.activeElement.parentElement.parentElement.children[0].children[0].children[1].children[1].children[0].textContent.replace("₹","")
    let finalSubPrice = document.activeElement.parentElement.parentElement.children[2].textContent.replace("₹","")
    let finalSubPriceX = document.activeElement.parentElement.parentElement.children[2]
    let priceTemp = ((Number.parseInt(actualPrice))+(Number.parseInt(finalSubPrice)))+priceSymbol
    finalSubPriceX.textContent = priceTemp
    // console.log(actualPrice)
    // console.log(finalSubPrice)
    let temp = Number.parseInt(activeNodeINCR)
    temp+=1
    activeNodeINCRX.textContent = temp
    setCard()
    
    
    
}

function cartDecreaseQuantity(){
    
    let activeNodeDEC = document.activeElement.parentElement.children[1].textContent
    let activeNodeDECX = document.activeElement.parentElement.children[1]
    if (activeNodeDEC<=0) {
        let remCart = document.activeElement.parentElement.parentElement
       
        card.removeChild(remCart)
        
        if(Number.parseInt(card.children.length)<=0){
            disapear.style.display = "none";
            nothingIsThere()
        }
    }
    else{
        
        let temp = (Number.parseInt(activeNodeDEC))
        temp-=1
        activeNodeDECX.textContent=temp
    }

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


function removeCard(){

    let remCart = document.activeElement.parentElement.parentElement.parentElement.parentElement
   
    card.removeChild(remCart)
    if(Number.parseInt(card.children.length)<=0){
        disapear.style.display = "none";
        nothingIsThere()
    }

    }
  
function nothingIsThere(){
    let h1 = document.createElement("h1")
    let text = document.createTextNode("<<<======YOUR CART IS EMPTY======>>>")
    h1.appendChild(text)
    card.appendChild(h1)
}




function setCard(){
    let afterLocCart = insertCart
    let beforeLocCart = itemCard
    let srcTemp = localStorage.getItem("img")
    let head = localStorage.getItem("head")
    let price = localStorage.getItem("price")
    let quantity = localStorage.getItem("quantity")
    let x = `<tr class="cartContainer">
    <td>
        <div class="cartInfo">
            <img src="${srcTemp}">
            <div>
                <p> ${head} </p>
                <small>PRICE: <strong>${price}</strong></small>
                <br>
                <button type="button" class="removeBTN" onclick="removeCard()">REM</button>
            </div>
        </div>
    </td>
    <td>
        <button type="button" onclick="cartIncreaseQuantity()">▲</button>
        <span>${quantity}</span>
        <button type="button" onclick="cartDecreaseQuantity()">▼</button>
    </td>
    <td id="cartPrice">${price}</td>
</tr>`
    // let createCartXX = createCart()
    afterLocCart.appendChild(x)
    // afterLocCart.insertBefore(x,beforeLocCart)

}


function createCart(){
    let clonedCart = itemCard
    let setCartImgX = clonedCart.children[0].children[0].children[0]
    // console.log(setCartImgX)
    // console.log(setCartImgX)
    setCartImg = clonedCart.children[0].children[0].children[0].src
    let srcTemp = localStorage.getItem("img")
    // console.log(srcTemp)
    setCartImgX.src = srcTemp
    // let urlImg = setCartImg.slice(0,26)
    // console.log(urlImg)
  
    let setCartHeadingX = clonedCart.children[0].children[0].children[1].children[0]
    // console.log(setCartHeadingX)
    // setCartHeading = itemCard.children[0].children[0].children[1].children[0].textContent
    setCartHeading = setCartHeadingX.textContent
    let head = localStorage.getItem("head")
    setCartHeadingX.textContent = head
  
    let setCartPriceX = clonedCart.children[0].children[0].children[1].children[1].children[0]
    // console.log(setCartPriceX)
    setCartPrice = clonedCart.children[0].children[0].children[1].children[1].children[0].textContent
    let price = localStorage.getItem("price")
    setCartPriceX.textContent = price
  
    let subPriceX = clonedCart.children[2]
    // let subPrice = itemCard.children[2].textContent
    subPriceX.textContent = price
    // console.log(subPrice)
  
    let setCartQuantityX=clonedCart.children[1].children[1]
    // console.log(setCartQuantityX)
    setCartQuantity=clonedCart.children[1].children[1].textContent
    let quantity = localStorage.getItem("quantity")
    setCartQuantityX.textContent = quantity;
    // console.log(clonedCart.children)
    // createCart()
    clearLocalStorage()
}  

function setLocalStorageItemData(img,head,quantity,price){
    localStorage.setItem("img",img)
    localStorage.setItem("head",head)
    localStorage.setItem("quantity",quantity)
    localStorage.setItem("price",price)
    
}

function setCartLocalStorage() {
    let setCartImgX = itemCard.children[0].children[0].children[0]
    // console.log(setCartImgX)
    setCartImg = itemCard.children[0].children[0].children[0].src
    let srcTemp = localStorage.getItem("img")
    // console.log(srcTemp)
    setCartImgX.src = srcTemp
    // let urlImg = setCartImg.slice(0,26)
    // console.log(urlImg)

    let setCartHeadingX = itemCard.children[0].children[0].children[1].children[0]
    // console.log(setCartHeadingX)
    // setCartHeading = itemCard.children[0].children[0].children[1].children[0].textContent
    setCartHeading = setCartHeadingX.textContent
    let head = localStorage.getItem("head")
    setCartHeadingX.textContent = head

    let setCartPriceX = itemCard.children[0].children[0].children[1].children[1].children[0]
    // console.log(setCartPriceX)
    setCartPrice = itemCard.children[0].children[0].children[1].children[1].children[0].textContent
    let price = localStorage.getItem("price")
    setCartPriceX.textContent = price

    let subPriceX = itemCard.children[2]
    // let subPrice = itemCard.children[2].textContent
    subPriceX.textContent = price
    // console.log(subPrice)

    let setCartQuantityX=itemCard.children[1].children[1]
    // console.log(setCartQuantityX)
    setCartQuantity=itemCard.children[1].children[1].textContent
    let quantity = localStorage.getItem("quantity")
    setCartQuantityX.textContent = quantity;

    // console.log(setCartImg)
    // console.log(setCartHeading)
    // console.log(setCartQuantity)
    // console.log(setCartPrice)
    createCart()
    clearLocalStorage()
}

function clearLocalStorage(){
    localStorage.clear()
}
