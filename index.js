// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {

    for (let element of Object.values(collection)) {
        callback(element);
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, element => newArray.push(callback(element)));
    return newArray;
}

function myReduce(collection, callback, acc) {

    const values = Object.values(collection);

    if (acc) {
        myEach(collection, element => acc = callback(acc, element, collection));
        return acc;
    } else {
        acc = values[0];
        for (let i = 1; i < values.length; i++) {
            acc = callback(acc, values[i], collection);
        }
        return acc;
    }
}

function myFind(collection, predicate) {

    const values = Object.values(collection);

    for (let element of values) {
        if (predicate(element)) {
            return element;
        }
    }

    return undefined;
}

function myFilter(collection, predicate) {

    const filteredArray = [];

    myEach(collection, element => {
        if (predicate(element)) {
            filteredArray.push(element);
        }
    })
    return filteredArray;
}

function mySize(collection) {
    let counter = 0;
    myEach(collection, element => counter++);
    return counter;
}

// Array Functions

function myFirst(array, n) {
    const firstsArray = [];
    if (n) {
        for (let i = 0; i < n; i++) {
            firstsArray.push(array[i]);
        } 
        return firstsArray;
    } else {
        return array[0];
    }
}

function myLast(array, n) {
    const lastsArray = [];
    if (n) {
        for (let i = array.length - n; i < array.length; i++) {
            lastsArray.push(array[i]);
        } 
        return lastsArray;
    } else {
        return array[array.length - 1];
    }
}

// Object Functions

function myKeys(object) {
    const keyArray = [];
    for (let key in object) {
        keyArray.push(key);
    }
    return keyArray;
}

function myValues(object) {
    const valueArray = [];

    for(let key in object) {
        valueArray.push(object[key]);
    }
    return valueArray;
}