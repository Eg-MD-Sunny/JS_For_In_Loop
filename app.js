//-----Object Print
var a = {
    firstName:`Jon Sina`,
    lastName:`Sing`,
    age: `30`,
    country: `USA`
};
console.log(a.firstName);
console.log(a.lastName);
console.log(a.age);
console.log(a.country);


//----Object Value Print Using For/In Loop
var obj ={
    name:`Sanjida`,
    email:`sanjida@gmail.com`,
    mobile:`01578226598`,
    location:`Jessore`
}
for(var key in obj){
    document.write(key + ":" + obj[key] + "</br>")
}


let result = {
    SubjactName: `English`,
    Mark: `90`,
    Class: `Five`
}
for(var key in result){
    document.write(key + ":" + result[key] + "</br>")
}