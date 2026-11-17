for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum100 = 0;

for (let i = 1; i <= 100; i++) {
    sum100 = sum100 + i;
}

console.log(sum100);

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Квадрат ${i} - ${i * i}`);
}

for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
}

let sum1 = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum1 += i;
    }
}

console.log(sum1);

for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

const object = {
    city: "Bishkek",
    name: "Victory",
    age: "18"
};

object.age = 20;
object.phone = "Iphone";
delete object.city;

console.log("email" in object);

for (let key in object) {
    console.log(key);
}

for (let key in object) {
    console.log(object[key]);
}

let objectCount = 0;

for (let key in object) {
    objectCount++;
}

console.log(objectCount);

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

const numbers = [5, -3, 10, 7, 2, -8, 7, 4, 10];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Сумма:", sum);

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Максимум:", max);

let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Минимум:", min);

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    count++;
}

console.log("Количество:", count);

let sumEven = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
    }
}

console.log("Сумма чётных:", sumEven);

let negative = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negative++;
    }
}

console.log("Отрицательные:", negative);

let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log("Произведение:", product);

let maxIndex = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}

console.log("Индекс максимума:", maxIndex);

let minIndex = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}

console.log("Индекс минимума:", minIndex);

let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found = true;
    }
}

console.log("Есть число 10:", found);

let countSeven = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        countSeven++;
    }
}

console.log("Количество семёрок:", countSeven);

let lastPositive = null;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}

console.log("Последнее положительное:", lastPositive);

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
}

let average = sumNumbers / numbers.length;

console.log("Среднее арифметическое:", average);