// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x=+prompt('Input an integer:');
let x=5;
if(x !== 0 ){
    console.log('Вірно');
}
else{
    console.log('Невірно')
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 14;
time = Math.trunc(time/15 + 1);
if( time === 1){
    console.log('First quarter');
}
else if(time === 2){
    console.log('Second quarter');
}
else if(time === 3){
    console.log('Third quarter');
}
else{
    console.log('Fourth quarter')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5;
if( day >= 1 && day<=10){
    console.log('First decade');
}
else if(day >10 && day <=20){
    console.log('Second decade');
}
else if( day>20 && day<=31){
    console.log('Third decade');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
day = +prompt('Input number of the day(1-7):');

switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}
   // Користувач вводить або має два числа.
   //  Потрібно знайти та вивести максимальне число з тих двох .
   //  Також потрібно врахувати коли введені рівні числа.
let a =+prompt('Input Number');
let b =+prompt('Input Number');
if (a===b){
    console.log(`${a} and ${b} are equal.`);
}
else {
    a > b ? console.log(a) : console.log(b);
}
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = 0;
y = y || 'default';
console.log(y);