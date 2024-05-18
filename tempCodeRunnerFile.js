let obj = {
    name : 'zaid',
    age : 24,
    havingGf : false
}

for(key in obj){
    console.log(key);
}

console.log('------------------------');
Object.defineProperty(obj, 'havingGf', {
    value : true,
    enumerable : false
})

for (const key in obj) {
    console.log(key);
}

console.log(obj.propertyIsEnumerable('havingGf')); //