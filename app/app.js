import data from '../data.json' assert{type: 'json'};

const d = document;
const pop_up = d.querySelectorAll(".pop-up");
const statsDay = d.querySelector(".stats-days");
const statsGraphic = document.querySelector(".stats-graphic");
let values = [];

data.forEach(d => {
    values.push(d.amount);

    statsGraphic.innerHTML += `
    <div class="stat" id="${d.day}"><p class="pop-up tue_pop-up">${d.amount}</p></div>
    `;
    statsDay.innerHTML += `
    <span>${d.day}</span>
    `
});

function createBars() {
    let maxBarHeightPX;

    if(window.matchMedia("max-width:767px")) {
        maxBarHeightPX = 200;
    }
    if(window.matchMedia("min-width: 768px")) {
        maxBarHeightPX = 140;
    }

    let maxValue = Math.max(...values);
    const stat = d.querySelectorAll(".stat");

    stat.forEach(s => {
        let valuePX = Number(s.textContent);
        let newHeight = Math.floor(valuePX * maxBarHeightPX / maxValue);
        
        s.style.height = `${newHeight}px`

        if (s.textContent === maxValue.toString()) {
            s.classList.add("high");
            }
        })
} 

document.addEventListener("DOMContentLoaded", createBars)

let totalMonth = values.reduce((total, current) => {
    return total + current;
})

console.log(totalMonth);







