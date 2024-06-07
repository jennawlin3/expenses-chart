import data from '../data.json' assert{type: 'json'};

const d = document;
const pop_up = d.querySelectorAll(".pop-up");
const statsDay = d.querySelector(".stats-days");
const statsGraphic = document.querySelector(".stats-graphic");
let values = [];

data.forEach(d => {
    values.push(d.amount);

    statsGraphic.innerHTML += `
    <div class="stat" id="${d.day}"><span class="pop-up tue_pop-up">${d.amount}</span></div>
    `;
    statsDay.innerHTML += `
    <span>${d.day}</span>
    `
});

console.log(values);

let maxBarHeightPX = 200;
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

let totalMonth = values.reduce((total, current) => {
    return total + current;
})

console.log(totalMonth);







