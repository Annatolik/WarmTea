let cartButton = document.getElementById("cartButton");
let buyButton = document.querySelectorAll("to-cart");
let closeButton = document.getElementById("closeButton");
let cartContainer = document.getElementById("cartContainer");
let overlay = document.getElementById("overlay");

cartButton.addEventListener("click", function() {
  openCart();
});

closeButton.addEventListener("click", function() {
  closeCart();
});

overlay.addEventListener("click", function() {
  closeCart();
});

let span = document.createElement('p');
let text = document.createTextNode("упс! тут ще порожньо!");
span.appendChild(text);
span.style.color = "#615c5c";
span.classList.add("empty");
let imageempty = document.createElement("img");
imageempty.src = "icons/empty-cart.png";
imageempty.classList.add("empty");
imageempty.style.opacity = "0.4";
imageempty.style.height = "100px";
let hr = document.createElement("hr");
hr.classList.add("empty");

let cartontainer = document.createElement("div");
cartontainer.appendChild(hr);
cartontainer.appendChild(span);
cartontainer.appendChild(imageempty);
cartContainer.appendChild(cartontainer);

let number = 1;
let subtotal = 0;
let subtotalnode = document.createElement('p');
let subt = document.createTextNode("підсумок: " + subtotal + " UAH");
subtotalnode.appendChild(subt);
subtotalnode.style.textAlign = "right";
subtotalnode.style.color = "#555555";
subtotalnode.style.fontSize = "20px";

let deliv = document.createElement('p');
let delivery = document.createTextNode("доставка: 40 UAH");
deliv.appendChild(delivery);
deliv.style.textAlign = "right";
deliv.style.color = "#555555";
deliv.style.fontSize = "20px";

let fullprice = document.createElement('p');
let full = document.createTextNode("разом: " + (subtotal + 40) + " UAH");
fullprice.appendChild(full);
fullprice.style.textAlign = "right";
fullprice.style.fontSize = "20px";

var buttorder = document.createElement("button");
buttorder.textContent = "оформити замовлення"
buttorder.style.backgroundColor = "#26271C";
buttorder.style.color = "#ffffff";
buttorder.style.fontSize = "25px";
buttorder.style.padding = "15px 20px";
buttorder.style.marginLeft = "25%";
buttorder.style.marginTop = "20px";
buttorder.style.marginBottom = "30px";
buttorder.addEventListener("click", function() {
  alert("замовлення оформлено, дякуємо!")
});

function addToCart(button) {
    alert("товар додано в кошик!");
    number = 1;
    subtotal += number*12;
    subtotalnode.textContent = "підсумок: " + subtotal + " UAH";
    fullprice.textContent = "разом: " + (subtotal + 40) + " UAH";
    cartontainer.style.display = "none";
    let item = button.parentNode.cloneNode(true);
    item.removeChild(item.lastChild);
    item.removeChild(item.lastChild);

    let childLabels = item.getElementsByTagName('label');

    for (let i = 0; i < childLabels.length; i++) {
        childLabels[i].style.marginRight = "70px";
    }
    childLabels[0].style.marginTop = "50px";

    let node = document.createElement("div");
    node.style.display = "none";
    let span = document.createElement('span');
    var text = document.createTextNode(number + " шт.");
    span.appendChild(text);

    let sum = document.createElement('span');
    let textsum = document.createTextNode(number*12 + " UAH");
    sum.appendChild(textsum);

    sum.style.fontSize = "24px";
    sum.style.marginLeft = "30px";

    var buttonplus = document.createElement("button");
    buttonplus.addEventListener("click", function() {
        number += 1;
        subtotal += 12;
        span.textContent = number + " шт.";
        sum.textContent = number*12 + " UAH";
        subtotalnode.textContent = "підсумок: " + subtotal + " UAH";
        fullprice.textContent = "разом: " + (subtotal + 40) + " UAH";
    });

    var imagepl = document.createElement("img");
    imagepl.src = "icons/plus.png";
    imagepl.style.height = "30px";

    buttonplus.appendChild(imagepl);
    
    var buttonminus = document.createElement("button");
    buttonminus.addEventListener("click", function() {
        number -= 1;
        if(number < 0){
          number = 0;
          subtotal = 0;
        }
        else{
          subtotal -= 12;
        }
        span.textContent = number + " шт.";
        sum.textContent = number*12 + " UAH";
        subtotalnode.textContent = "підсумок: " + subtotal + " UAH";
        fullprice.textContent = "разом: " + (subtotal + 40) + " UAH";
    });

    var imagemi = document.createElement("img");
    imagemi.src = "icons/minus.png";
    imagemi.style.height = "30px";

    buttonminus.appendChild(imagemi);

    span.style.color = "#585858"
    span.style.fontSize = "20px";
    span.style.lineHeight = "30px";

    node.appendChild(buttonminus);
    node.appendChild(span);
    node.appendChild(buttonplus);
    node.style.display = "flex";
    node.style.flexDirection = "row";
    node.style.width = "150px";
    node.style.justifyContent = "space-around";

    item.firstChild.nextSibling.style.width = "270px";
    item.firstChild.nextSibling.style.height = "240px";
    item.style.flexWrap = "wrap";
    item.style.justifyContent = "flex-start";
    item.style.height = "240px";
    item.style.width = "600px";
    item.style.padding = "0";

    item.appendChild(node);

    item.appendChild(sum);

    let weight = document.createElement('span');
    let weitext = document.createTextNode("3 г.");
    weight.appendChild(weitext);

    weight.style.color = "#585858"
    weight.style.fontSize = "20px";
    weight.style.marginLeft = "60px";

    item.appendChild(weight);

    var butt = document.createElement("button");
    butt.addEventListener("click", function() {
      item.remove();
      subtotal -= 12*number;
      subtotalnode.textContent = "підсумок: " + subtotal + " UAH";
      fullprice.textContent = "разом: " + (subtotal + 40) + " UAH";
      if (cartContainer.childNodes.length > 10){
        subtotalnode.remove();
        cartContainer.appendChild(subtotalnode);
        deliv.remove();
        cartContainer.appendChild(deliv);
        fullprice.remove();
        cartContainer.appendChild(fullprice);
        buttorder.remove();
        cartContainer.appendChild(buttorder);
      }
      else{
        subtotalnode.remove();
        deliv.remove();
        fullprice.remove();
        buttorder.remove();
        cartontainer.style.display = "block";
      }
    });

    var image = document.createElement("img");
    image.src = "icons/deletefromcart.png";
    image.style.height = "50px";
    image.style.width = "50px";
    image.style.marginTop = "90px";
    image.style.marginBottom = "auto";
    image.style.marginLeft = "0px";

    butt.appendChild(image);
    item.appendChild(butt);

    item.style.marginBottom = "20px";

    item.classList.remove("hover");


    cartContainer.appendChild(item);

    cartContainer.appendChild(subtotalnode);
    cartContainer.appendChild(deliv);
    cartContainer.appendChild(fullprice);
    cartContainer.appendChild(buttorder);

    let buttons = item.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].removeAttribute("onclick");
    }

  }



function openCart() {
  cartContainer.classList.add("open");
  overlay.style.display = "block";
}

function closeCart() {
  cartContainer.classList.remove("open");
  overlay.style.display = "none";
}


var ALERT_BUTTON_TEXT = "ок";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;
    if(d.getElementById("modalContainer")) return;
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";
    h1 = alertObj.appendChild(d.createElement("h1"));
    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }
    document.getElementById("modalContainer").style.opacity = "1";
    alertObj.style.display = "block";
    setTimeout(function() {
      removeCustomAlert();
    }, 3000);
}

function removeCustomAlert() {
  document.getElementById("modalContainer").style.opacity = "0";
  setTimeout(function() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
  }, 300);
}





