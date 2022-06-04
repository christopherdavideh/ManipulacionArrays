const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const food = (menu) => {
      return menu.find( menu => menu.id === '🌭');
  }

const location = (menu) => {
    return menu.findIndex( menu => menu.id === '🌭');
}

console.log(food(products));
console.log(location(products));