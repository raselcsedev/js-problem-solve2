 let numbers =[2, 3, 4, 2, 6, 3, 4, 7, 8, 9, 5, 1, 5, 3, 2, 9];

 function removeDublicate(numbers){
     let unique = [];
     for( let element of numbers){
         if(unique.indexOf(element)==-1){
             unique.push(element);
         }
     }
     return unique;
 }
 const uniqueElement= removeDublicate(numbers);
 console.log(uniqueElement);