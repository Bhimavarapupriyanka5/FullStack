const firstNames =["priya","Mouni"];
const lastName =["bh"];
const newArray =[];
for(let i=0; i<firstNames.length; i++){
    let fullName =`${firstNames[i]} ${lastName}`;
    newArray.push(fullName);
}
console.log(firstNames);
console.log(newArray);