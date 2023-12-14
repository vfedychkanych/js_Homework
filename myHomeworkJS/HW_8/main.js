// нпеаквуі - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let names = ['Vitalii', 'Sasha', 'Petro', 'Andrew', 'Oleg', 'Vika', 'Danik', 'Vika', 'Halia', 'Jack'];
let surnames = ['Fedyk', 'Loger', 'Vasik', 'Geryt', 'Horton', 'Vrikon', 'Liferon', 'Iron', 'Dertyk', 'Novosolov'];
let emails = ['dreg@gmail.com', 'dsfbklsdjgf@gmail.com', 'fdjsvfsjh@gmail.com', 'jhdsfvua@gmail.com', 'alsdjkfl@gmail.com', 'FADSKUYF@gmail.com', 'dsauyvf@gmail.com', 'poasdjhgbv@gmail.com', 'fdslafhas@gmail.com', 'fdisaulf@gmail.com'];
let phones = ['0985674332', '0687856435', '0987659843', '0509873425', '0975672389', '0686750912', '0986753285', '0509876754', '0667876534', '0683940385'];
let emptyMassive = [];
for (let i = 0; i < 10; i++) {
    emptyMassive.push(new User(i+1,names[i],surnames[i],emails[i],phones[i]));
}
console.log(emptyMassive);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(emptyMassive.filter(value => value.id % 2===0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(emptyMassive.sort(((a,b) => b.id - a.id)));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    id;
    name;
    surname;
    email;
    phone;
    order;

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let emptyClient = [];
emptyClient.push(new Client(1,'Vitalii','Fedyk', 'dreg@gmail.com', '0985674332', ['hlib','pechenya','limon','yabko']));
emptyClient.push(new Client(2,'Sasha','Loger', 'dsfbklsdjgf@gmail.com', '0687856435', ['hlib']));
emptyClient.push(new Client(3,'Petro','Vasik', 'fdjsvfsjh@gmail.com', '0987659843', ['hlib','pechenya','limon','yabko', 'grysha']));
emptyClient.push(new Client(4,'Andrew','Geryt', 'jhdsfvua@gmail.com', '0509873425', ['hlib','pechenya','limon']));
emptyClient.push(new Client(5,'Oleg','Horton', 'alsdjkfl@gmail.com', '0975672389', ['hlib','pechenya']));
emptyClient.push(new Client(6,'Vika','Vrikon', 'FADSKUYF@gmail.com', '0686750912', ['hlib','pechenya','limon','yabko','jaja', 'water']));
emptyClient.push(new Client(7,'Danik','Liferon', 'dsauyvf@gmail.com', '0986753285', ['pechenya']));
emptyClient.push(new Client(8,'Vika','Iron', 'poasdjhgbv@gmail.com', '0509876754', ['hlib','pechenya','limon','yabko','water','stil','sik','rychka']));
emptyClient.push(new Client(9,'Halia','Dertyk', 'fdslafhas@gmail.com', '0667876534', ['hlib','pechenya']));
emptyClient.push(new Client(10,'Jack','Novosolov', 'fdisaulf@gmail.com', '0683940385', ['hlib','pechenya','limon','yabko']));
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(emptyClient.sort((a,b)=> b.order.length-a.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, virobnik, yearVipusku, maxSpeed, engineV){
    this.model = model;
    this.virobnik = virobnik;
    this.yearVipusku = yearVipusku;
    this.maxSpeed = maxSpeed;
    this.engineV = engineV;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = () => console.log(`
    Model - ${this.model}
    Virobnyk - ${this.virobnik}
    Yaer Vipusku - ${this.yearVipusku}
    Max Speed - ${this.maxSpeed}
    Engine V - ${this.engineV}`);
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
    this.changeYear = (newValue) => this.yearVipusku = newValue;
    this.addDriver = (driver) => this.driver = driver;
}
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass{
    model;
    virobnik;
    yearVipusku;
    maxSpeed;
    engineV;

    constructor(model, virobnik, yearVipusku, maxSpeed, engineV) {
        this.model = model;
        this.virobnik = virobnik;
        this.yearVipusku = yearVipusku;
        this.maxSpeed = maxSpeed;
        this.engineV = engineV;
        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        this.info = () => console.log(`
    Model - ${this.model}
    Virobnyk - ${this.virobnik}
    Yaer Vipusku - ${this.yearVipusku}
    Max Speed - ${this.maxSpeed}
    Engine V - ${this.engineV}`);
        this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
        this.changeYear = (newValue) => this.yearVipusku = newValue;
        this.addDriver = (driver) => this.driver = driver;
    }
}
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    name;
    age;
    foot_size;

    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let girls = [
    new Popelushka('Vika',17, 32),
    new Popelushka('Olya',19, 34),
    new Popelushka('Katya',21, 33),
    new Popelushka('Sophia',18, 38),
    new Popelushka('Solomia',18, 37),
    new Popelushka('Lilia',16, 36),
    new Popelushka('Ira',19, 35),
    new Popelushka('Angelina',23, 39),
    new Popelushka('Diana',21, 40),
    new Popelushka('Ksenia',20, 41)
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    name;
    age;
    shoe_size;

    constructor(name, age, shoe_size) {
        this.name = name;
        this.age = age;
        this.shoe_size = shoe_size;
    }
}
let prince = new Prince('Andrew', 20, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < girls.length; i++) {
    if(prince.shoe_size === girls[i].foot_size){
        console.log(girls[i]);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(girls.find(value => value.foot_size === prince.shoe_size));
