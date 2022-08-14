//1

let name = prompt('Введите ваше имя')
    age = prompt('Введите ваш возраст')
    city = prompt('Введите ваш город проживания')
    phone = prompt('Введите ваш номер телефона')
    email = prompt('ВВедите ваш e-mail')
    company = prompt('Введите вашу компанию')

console.log('Меня зовут ' + name  + '.Мне ' + age +' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: телефон ' + phone + ' Почта ' + email + '.')




//2

let year = prompt('Введите текущий год')
let birthday = confirm('Вы отмечали день рождения в текущем году?')
let a = 1

if (birthday = true) {
    console.log(year - age)
} else { console.log(year - age - a)}






//3

let str = prompt('Введите шесть цифр')
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
    alert('сумма первых трех цифр равна сумме вторых трех цифр');
    } else {
    alert('сумма первых трех цифр НЕ равна сумме вторых трех цифр');
    }



//4

let a = prompt('Введите цифру, которая вам нравится')
if (a > 0) {
    console.log('Верно')
} else {console.log('Неверно')}



//5

let a = 10
    b = 2
    c = a + b
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

if (c > 1) {
    console.log( Math.pow(c, 2))
}



//6



if (a > 2, a < 11) {
    console.log('Верно')
} else (console.log('Неверно'))

if (b > 6, b = 6, b < 14) {
    console.log('Верно')
} else (console.log('Неверно'))



//7

let n = prompt('Введите минуту от 0 до 59')

    result = (n < 15) ? 'первая четверть' :
             (n <= 30) ? 'вторая четверть' :
             (n <= 45) ?  'третья четверть' :
             (n <= 59) ? 'четвертая четверть' : '';
console.log(result)



//8 

let day = prompt('Введите число от 1 до 31')
    result2 = (day <=10) ? 'первая декада' :
             (day <=20) ? 'вторая декада' :
             (day <=31) ? 'третья декада' : '';
console.log(result2)


//9
