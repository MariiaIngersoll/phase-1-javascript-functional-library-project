const myEach = (collection, cb) => {
    let arr = Object.values(collection)
    arr.forEach((element) => cb(element))


    return collection;
}

const myMap = (collection, callback) => {
    
    let arr = Object.values(collection)
    let newArr = [];
    arr.map((element) => newArr.push(callback(element)))
    return newArr
}

function myReduce(collection, callback, ...acc){
    let arr = Object.values(collection)
    let newAcc;
    let i;
    if(acc.length > 0){
        newAcc = acc[0];
        i = 0;
    } else {
        newAcc = arr[0]
        i = 1
    }
for (i; i <arr.length; i++){
    newAcc = callback(newAcc, arr[i], collection)
}
return newAcc;
}

function myFind(collection, callback) {
    for (let accessor in collection){
        let element = collection[accessor];
        if (callback(element)){
            return element;
        }
        }
   
    }

function myFilter(collection, callback){
    let selectedArr = [];
    for (let accessor in collection){
        let element = collection[accessor];
        if (callback(element)){
            selectedArr.push(element)
        }
    
    }

    return selectedArr;
}

function mySize(collection){
    return Object.keys(collection).length
}

function myFirst(collection, n = 1){
    let count = 1;
    let array = [];
    for (let accessor in collection) {
        if (count <= n){
            array.push(collection[accessor]);
            count ++
        }
    }
    return array.length > 1 ? array : array[0]
}

function myLast(collection, n =1){
    let startingIndex = collection.length -n;

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
;}

function myKeys(collection){
    return collection.filter(element => !element)
}