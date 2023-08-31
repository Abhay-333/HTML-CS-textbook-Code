let a = [34, 352, 336];

// Array map Method
let arr = a.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;
})
console.log(arr);

// Array filter Method
let b = [24, 532, 36, 367, 373]
let c = b.filter((a)=>{
    return a<100
})
console.log(c)

// Array Reduce Method
let arr2 =[1, 2, 3, 4, 5, 35]
let arr3 = arr2.reduce((a1, a2)=>{
    return a1 + a2
})
console.log(arr3)