// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
        result.push(callback(value));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    const startIndex = acc !== undefined ? 0 : 1;

    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
        if (predicate(value)) {
            result.push(value);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
    if (n !== undefined) {
        return array.slice(0, n);
    }
    return array[0];
}

function myLast(array, n) {
    if (n !== undefined) {
        return array.slice(-n);
    }
    return array[array.length - 1];
}

// BONUS: mySortBy
function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        if (aValue > bValue) return 1;
        if (aValue < bValue) return -1;
        return 0;
    });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, shallow, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
