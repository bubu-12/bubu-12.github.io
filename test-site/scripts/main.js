let myImage = document.querySelector('img');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName){
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/可莉2.jpg') {
      myImage.setAttribute('src', 'images/可莉5.jpg');
    } else {
      myImage.setAttribute('src', 'images/可莉2.jpg');
    }
}

alert('滴滴滴');
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
   setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}


