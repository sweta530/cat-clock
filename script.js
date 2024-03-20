const wakeTimeSelector = document.getElementById('wakeUpTimeSelector');
const lunchTimeSelector = document.getElementById('lunchTimeSelector');
const napTimeSelector = document.getElementById('napTimeSelector');
const clock = document.getElementById('clock');
const catImage = document.getElementById('lolCatImage');
const catMessageText = document.getElementById('catMessage');
const partyTimeButton = document.getElementById('partyTimeButton');

var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

let optionsData = [
    { value: "1", text: "1 AM - 2 AM" },
    { value: "2", text: "2 AM - 3 AM" },
    { value: "3", text: "3 AM - 4 AM" },
    { value: "4", text: "4 AM - 5 AM" },
    { value: "5", text: "5 AM - 6 AM" },
    { value: "6", text: "6 AM - 7 AM" },
    { value: "7", text: "7 AM - 8 AM" },
    { value: "8", text: "8 AM - 9 AM" },
    { value: "9", text: "9 AM - 10 AM" },
    { value: "10", text: "10 AM - 11 AM" },
    { value: "11", text: "11 AM - 12 PM" },
    { value: "12", text: "12 PM - 1 PM" },
    { value: "13", text: "1 PM - 2 PM" },
    { value: "14", text: "2 PM - 3 PM" },
    { value: "15", text: "3 PM - 4 PM" },
    { value: "16", text: "4 PM - 5 PM" },
    { value: "17", text: "5 PM - 6 PM" },
    { value: "18", text: "6 PM - 7 PM" },
    { value: "19", text: "7 PM - 8 PM" },
    { value: "20", text: "8 PM - 9 PM" },
    { value: "21", text: "9 PM - 10 PM" },
    { value: "22", text: "10 PM - 11 PM" },
    { value: "23", text: "11 PM - 12 AM" },
    { value: "24", text: "12 AM - 1 AM" }
];

optionsData.forEach(function(optionData) {
    addOption(wakeTimeSelector,optionData);
    addOption(lunchTimeSelector,optionData);
    addOption(napTimeSelector,optionData);
});

(function setTimeSelector() {
    wakeTimeSelector.selectedIndex = wakeUpTime;
    lunchTimeSelector.selectedIndex = lunchTime - 1;
    napTimeSelector.selectedIndex = napTime;

    wakeTimeSelector.addEventListener('change',() => {
        wakeUpTime = wakeTimeSelector.value; 
        updateCat();
    });
    lunchTimeSelector.addEventListener('change',() => {
        lunchTime = lunchTimeSelector.value; 
        updateCat();
    });
    napTimeSelector.addEventListener('change',() => {
        napTime = napTimeSelector.value; 
        updateCat();
    });
})();

function addOption(selector,optionData) {
    var option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    selector.appendChild(option);
}

setInterval(() => {
    clock.innerHTML = `${setClock()}`;
}, 1000);

function setClock() {
    var currentTime = new Date(); 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    return clockTime;
}

function partyEvent() {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = 'Party Over!';
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyTimeButton.innerText = 'Party Time!';
        partyTime = -1;
        partyTimeButton.style.backgroundColor = "#222";
    }
    updateCat();
}

updateCat();

function updateCat() {
    var time = new Date().getHours();
    var image = "";
    var catMessage = '';

    if (time == partyTime) {
        catMessage = `"let's party!"`;
        image = "assets/partyTime.jpg";
    } 
    else if (time == wakeUpTime) {
        catMessage = `"Wake Up!"`;
        image = "assets/wakeTime.jpg";        
    }
    else if (time == lunchTime) {
        catMessage = `"Let's have some lunch!"`;
        image = "assets/lunchTime.jpg";        
    }
    else if (time == napTime) {
        catMessage = `"Sleep tight!"`;
        image = "assets/napTime.jpg";        
    }
    else if (time < noon) {
        catMessage = `"Good morning!"`;
        image = "assets/noonTime.jpeg";        
    }
    else if (time >= evening) {
        catMessage = `"Good evening!"`;
        image = "assets/Cat_sleep.jpg";        
    } 
    else {
        catMessage = `"Good afternoon!"`;
        image = "assets/normalTime.jpg";
    }

    catImage.src = image;
    catMessageText.innerText = catMessage;
}