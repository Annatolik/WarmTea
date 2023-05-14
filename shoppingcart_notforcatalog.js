let cartButton = document.getElementById("cartButton");
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





