/* let products = [
    {name: 'Loaptop', price: 45000, Quantity:1},
    {name: 'Phone', price: 25000, Quantity:3},
    {name: 'Watch', price: 5000, Quantity:5},
    {name: 'Shirt', price: 400, Quantity:8},

]

let totalprice=0;
for(const product of products){
    // console.log(product);

    
    const productTotal = product.price*product.Quantity;
    totalprice= totalprice+productTotal;
}
console.log(totalprice); */

let sum=0; 
for( let i = 0; i<=3;i++){
     sum = sum + i;
     }
     console.log(sum);

     function inchToFeet(inch){
        var feet = inch/12;
        return feet;
        }
        

        function leapYear(year) {
            const reminder = year % 4;
            if(reminder == 0){
              return true;
            }
            else{
              return false;
            }
          }