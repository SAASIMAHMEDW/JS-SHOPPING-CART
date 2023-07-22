

let con = document.getElementById("data")
let cards = document.getElementsByClassName("card")
let counter = document.querySelector(".counter")


function increaseQuantity(){
    let temp = Number.parseInt(con.innerText)
    temp+=1
    con.innerHTML=temp
}

function decreaseQuantity(){
    let temp = Number.parseInt(con.innerText)
    if (temp<=0) {
        alert("CANNOT DECREASE")
    }
    else{
        temp-=1
        con.innerHTML=temp
    }
}

function getItem(){
    let data = []
    let dataNode = document.activeElement.parentNode.parentNode.childNodes
    for (let i = 0; i < dataNode.length; i++) {
        
        if (i==1 || i==3) {
            data.push(dataNode[i])
        }
    }
    
    console.log(data)
}




function createCart(cardSrc,cartHead,cardPrice,cardQuantity){
    return `
    <tr class="cartContainer">
        <td>
            <div class="cartInfo">
                <img src="${cardSrc}">
                    <div>
                        <p> ${cartHead} </p>
                        <small>PRICE: <strong>${cardPrice}</strong></small>S
                        <br>
                        <button type="button" class="removeBTN" onclick="removeCard()">REM</button>
                    </div>
            </div>
            </td>
                <td>
                    <button type="button" onclick="cartIncreaseQuantity()">▲</button>
                    <span>${cardQuantity}</span>
                    <button type="button" onclick="cartDecreaseQuantity()">▼</button>
                </td>
        <td id="cartPrice">XX</td>
    </tr>`;
}