let a = [ 3, 4, 6, 3, 3, 7];

for (let i = 0; i<=a.length; i++)
{
    console.log(a[i]);
}

//Foreach loop
a.forEach((element) => {
    console.log(element*element)
});

// Array.from
let name1 = "Abhay";
let arr = Array.from(name1)
console.log(arr);

// For....of loop
for (let i of a)                    // Alternative to for loop
{
    console.log(i);
}

// For....in loop
for (let i in a)      
{
    console.log(a[i]);
}