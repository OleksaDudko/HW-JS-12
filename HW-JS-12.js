// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    hobby : "football",
    premium: true,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const objKeys = Object.keys(user);
for (const i of objKeys) {
    console.log(`Key: ${i}, object: ${user[i]}`);
}

// ================================================================================================================

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const objA = {
    hobby : "football",
    premium: true,
    // mood: "happy",
    // age: 35
}
const countProps = (obj) =>{
    const key = Object.keys(obj)
    return key.length
}
console.log(countProps(objA));

// =====================================================================================================================

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employers = {
    Olena: 20,
    Ihor: 5,
    Irma: 160,
    Bohdan: 64
}
function findBestEmployee(employees){
    let bestEmployee = "";
    let maxTask = 0;
    const entries = Object.entries(employers)
    for (const i of entries) {
        if (i[1] > maxTask) {
            maxTask = i[1];
            bestEmployee = i[0]
        }
    }
    return `${bestEmployee}: ${maxTask}`
}
console.log(findBestEmployee(employers));

// ======================================================================================================================

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salarys = {
    Olena: 20000,
    Ihor: 25000,
    Irma: 26500,
    Bohdan: 30000
}

const employeers = Object.keys(salarys);
for (const i of employeers) {
    console.log(`Employer: ${i}, salary: ${salarys[i]}`);
}

function countTotalSalary(employees){
    let totalSalary = 0;
    const value = Object.values(salarys)
    for (let i = 0; i < value.length; i += 1) {
        if (typeof value[i] === "number") {
            totalSalary += value[i];
        }
    }
    return `Загальна зарплата всіх праівників ${totalSalary} грн`
}

console.log(countTotalSalary(salarys));

// ===================================================================================================================

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
    { name: "Mango", price: 89, numbers:  20},
    { name: "Orange", price: 50, numbers:  10},
    { name: "Banana", price: 49, numbers:  15},
    { name: "Cucumber", price: 30, numbers:  25}
];

function calculateTotalPrice(products, name) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (products[i].name === name) { 
            totalPrice += products[i].price * products[i].numbers;
        }
    }
    return `Загальна кількість продуктів ${totalPrice} грн`
}

console.log(calculateTotalPrice(products, "Mango")); 
console.log(calculateTotalPrice(products, "Orange"));  
console.log(calculateTotalPrice(products, "Banana"));  
console.log(calculateTotalPrice(products, "Cucumber"));  