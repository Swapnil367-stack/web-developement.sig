

// Write a program to print the marks of students in an object usign for loop
// obj = { harry:80,rohan:70, Akash:75}

const obj = {harr:80,rohan:70,Akash:75}
for(let name in obj){
    console.log(name + " : " + obj[name])
}


