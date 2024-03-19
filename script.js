const wakeTimeSelector = document.getElementById('wakeUpTimeSelector');
const lunchTimeSelector = document.getElementById('lunchTimeSelector');
const napTimeSelector = document.getElementById('napTimeSelector');

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
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

wakeTimeSelector.selectedIndex = wakeuptime;
lunchTimeSelector.selectedIndex = lunchtime;
napTimeSelector.selectedIndex = naptime;

console.log(lunchTimeSelector.selectedIndex);

function addOption(selector,optionData) {
    var option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    selector.appendChild(option);
}

