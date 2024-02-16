// functions, return,if,array,for loop,objects

const gas = [20,40,10,299];
const food =[78,193,9];
function calculateTotal(arr){
    let total = 0;
    for (let i=0; i<arr.length; i++){
        total += arr[i];
    }
    if(total>200){
        console.log(`to much money`);
        return total;
    }
}
    let gasTotal = calculateTotal(gas);
    let foodTotal = calculateTotal(food);

    console.log({
        gas:gasTotal,
        food:foodTotal
    });
