

const sum = (a = 10, b = 5) => a + b;

console.log(sum());

console.log(sum(20));

console.log(sum(20, 30));



const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };

let { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

const fruits = ['Banana', 'Strawberry', 'Orange', 'Pear'];

let [fruit1, fruit2, fruit3, fruit4] = fruits;


console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};

let { name, race } = animalFunction();

console.log(name);
console.log(race);

const car = { nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

let { nameCar, itv } = car;

console.log(nameCar)
console.log(itv)

let [itv1, itv2, itv3] = itv;

console.log(itv1, itv2, itv3);


const pointsList = [32, 54, 21, 64, 75, 43];
let copyPointsList = [...pointsList];
console.log(copyPointsList);

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

let toyCopy = { ...toy };
console.log(toyCopy);

const concatList = [32, 54, 21, 64, 75, 43];
const concatList2 = [54, 87, 99, 65, 32];

let newList = [...concatList, ...concatList2];

console.log(newList);


const toyNew = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { name: 'Buddy', lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

let toyConcat = { ...toyNew, ...toyUpdate };

console.log(toyConcat);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let copyColors = [...colors];

copyColors.splice(2, 1)

console.log(copyColors);


const students = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

let studentsNameNoReturn = students.map(student => student.name);

let studentsName = students.map((student) => {
    return student.name
});

console.log(studentsNameNoReturn);
console.log(studentsName);

const studentsAnacleto = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

let studentsAnacletoName = students.map((student) => {
    return student.name.charAt(0) === 'A' ? student.name = 'Anacleto' : student.name;
});

let studentsAnacletoNameIf = students.map((student) => {
    if (student.name.charAt(0) === 'A') {
        student.name = 'Anacleto'
    }
    return student.name;
});

console.log(studentsAnacletoName);
console.log(studentsAnacletoNameIf);

const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

let isVisitedCities = cities.map((city) => {
    return city.isVisited ? city.name = `${city.name} Visited` : city.name;
})

let oldVersionVisitedCities = [];
let myCity;
for (let index = 0; index < isVisitedCities.length; index++) {
    if (isVisitedCities[index].isVisited) {
        myCity = `${isVisitedCities[index].name} Visited`
        oldVersionVisitedCities.push(isVisitedCities[index].name)
    } else {
        oldVersionVisitedCities.push(isVisitedCities[index].name)
    }
}

console.log(isVisitedCities);


const ages = [22, 18, 24, 55, 65, 21, 12, 13, 90];

let agesFiltered = ages.filter((age) => age >= 18);

console.log(agesFiltered);

const agesPar = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let agesParFiltered = agesPar.filter((age) => age % 2 == 0);

console.log(agesParFiltered);

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let stremersFiltered = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed == 'League of Legends') {
        return streamer
    }
});

let stremersIncludesFiltered = streamers.filter((streamer) => {
    if (streamer.name.includes('u')) {
        return streamer
    }
});

console.log(stremersIncludesFiltered);

console.log(stremersFiltered);



const numbers = [32, 21, 63, 95, 100, 67, 43];

let numberFound = numbers.find((number) => number === 100);

console.log(numberFound);

const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

let movieFound = movies.find((movie) => movie.date === 2010);

console.log(movieFound);



const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

let examsReducer = exams.reduce((sum, exam) => {
    return sum += exam.score
}, 0);

console.log(examsReducer);

let examsOkReducer = exams.reduce((sum, exam) => {
    return exam.score >= 5 ? sum += exam.score : sum += 0
}, 0);

console.log(examsOkReducer);

let teams = [
    {
        name: 'newTeam',
        isGood: false,
        titles: 3,
        color: 'White'
    },
    {
        name: 'Mapped',
        isGood: true,
        titles: 1,
        color: 'Blue'
    },
    {
        name: 'Toho',
        isGood: true,
        titles: 1,
        color: 'Black'
    }
]

