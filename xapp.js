function greet(Name) {
    console.log(`Hello, ${Name}`);
    // console.log('ra');
    // console.log('mi');
}
// sing();
// sing();
// sing();

// function isSnakeEyes(x, y) {
//     if (x === y) {
//         console.log('Snake Eyes!');

//     } else { console.log('Not Snake Eyes!') }
// }

// function add(x, y) {
//     //console.log(x+y)
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     else if (typeof x ==) { }
//     //let sum = x+y;
//     return x + y;
// }

////////////////////////////////////////////////////////////////////////////////

const element = [];

function lastElement(element) {
    //return element;
    if (element.length !== null) {
        return element.pop();
    }
    else if (element.length === null) {
        return null;
    }
}

function sumArray(sumA) {

    let i = 0;
    let ans = 0;
    if (sumA.length === 0) {
        return null;
    }
    while (i < sumA.length) {

        ans += sumA[i];
        i++;
    }
    return (ans);
}

function returnDay(x) {

    let days = [null, 'Monday', 'Tuseday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (x < 0 || x > 7) {

        console.log('Invaled input');

    }
    return (days[x]);

}

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstName = fullNames.map(function(name){
    return name.first;
})