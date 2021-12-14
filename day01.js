import day01_data from './day01_data.js';

// console.log(day01_data);

let count = 0;

day01_data.forEach((item, index) => {
    if (index === 0) {
        count++;
    } else if (day01_data[index] > day01_data[index - 1]) count++;
});

console.log(day01_data[-1]);

console.log(count);