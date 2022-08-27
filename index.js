const myEach = function (collection, callBack) {
    const values = getValues(collection)
    values.forEach(value => callBack(value));
    return collection;
}


const myMap = function (collection, callBack) {
    const newCollection = []
    const values = getValues(collection);
    values.forEach(value => {
        newCollection.push(callBack(value))
    })
    return newCollection;
}

const myReduce = function (collection, callback, acc = null) {
    let myCollection = Object.values(collection)

    if (acc === null) {
        acc = myCollection[0]
        myCollection = myCollection.slice(1)
    }

    for (let i = 0; i < myCollection.length; i++) {
        acc = callback(acc, myCollection[i])
    }

    return acc
}

const myFind = function (collection, predicate) {
    const newValues = getValues(collection)
    let value;
    for (let i = 0; i < newValues.length; i++) {
        if (predicate(newValues[i]) === true) {
            value = newValues[i]
            break;
        }
    }
    return value;
}

const myFilter = function (collection, predicate) {
    const newCollection = getValues(collection);
    let filteredValues = []

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            filteredValues.push(newCollection[i]);
        }

    }
    return filteredValues;

}

const mySize = function (collection) {
    const newCollection = Object.values(collection);
    let length = 0;
    for (let i = 0; i < newCollection.length; i++) {
        length++;
    }
    return length;
}

const myFirst = function (array, integer = null) {
    let slicedArray = []
    if (integer === null) {
        slicedArray = array[0]
    } else {
        for (let i = 0; i < integer; i++) {
            slicedArray.push(array[i])
        }
    }
    return slicedArray
}

const myLast = function (array, integer = null) {
    let slicedArray = []
    if (integer === null) {
        slicedArray = array[array.length - 1]
    } else {
        for (let i = array.length - integer; i < array.length; i++) {
            slicedArray.push(array[i])
        }
    }
    return slicedArray;
}

const myKeys = function (object) {
    const arrayKeys = [];
    for (const item in object) {
        arrayKeys.push(item)
    }
    return arrayKeys;
}

const myValues = function (object) {
    const arrayValues = [];
    for (const item in object) {
        arrayValues.push(object[item])
    }
    return arrayValues
}

const getValues = function (collection) {
    return Object.values(collection);
}
