  const phones = [
      {name: 'Samsung', price: 45000, camera:8, storage:32},
      {name: 'Walton', price: 15000, camera:10, storage:8},
      {name: 'Shaomi', price: 12000, camera:8, storage:16},
      {name: 'Oppo', price: 17000, camera:7, storage:32},
      {name: 'Nokia', price: 8000, camera:10, storage:4},
      {name: 'HTC', price: 25000, camera:10, storage:16},
  ];
  let cheapest = phones[0];

  for( let phone of phones){
      
      if(phone.price<cheapest.price)
      cheapest=phone;
  }
  
  console.log(cheapest);
