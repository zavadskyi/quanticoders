const employees = [
  {
    id: 1,
    name: "Mildred Carson",
    drinks: ["Macchiato"],
  },
  {
    id: 2,
    name: "Clifford Brown",
    drinks: ["Latte"],
  },
  {
    id: 3,
    name: "Kellie Fletcher",
    drinks: ["Flat White", "Espresso"],
  },
  {
    id: 4,
    name: "Don Parsons",
    drinks: ["Espresso"],
  },
  {
    id: 5,
    name: "Renee Reynolds",
    drinks: ["Cappuccino", "Macchiato"],
  },
  {
    id: 6,
    name: "Rudolph Bishop",
    drinks: ["Latte", "Macchiato", "Flat White"],
  },
  {
    id: 7,
    name: "Geraldine Carpenter",
    drinks: ["Espresso"],
  },
  {
    id: 8,
    name: "Hilda Jimenez",
    drinks: ["Latte", "Macchiato", "Espresso"],
  },
  {
    id: 9,
    name: "Pauline Roberson",
    drinks: ["Espresso"],
  },
  {
    id: 10,
    name: "Vanessa Barrett",
    drinks: ["Flat White", "Cappuccino", "Latte"],
  },
];

const recipes = {
  Cappuccino: {
    coffee: 0.01,
    water: 0.035,
    milk: 0.09,
  },
  Espresso: {
    coffee: 0.01,
    water: 0.035,
  },
  Latte: {
    coffee: 0.01,
    water: 0.035,
    milk: 0.135,
  },
  "Flat White": {
    coffee: 0.02,
    water: 0.04,
    milk: 0.11,
  },
  Macchiato: {
    coffee: 0.01,
    water: 0.035,
    milk: 0.015,
  },
};

const prices = {
  coffee: 3.6,
  water: 1,
  milk: 1.5,
};
// add total price to each employees for his drinks
const addTotalPriceToEmployees = (arr, obj) => {
  const pricePerServingKeys = Object.keys(obj);
  return arr.map((employee) => {
    let total = 0;

    employee.drinks.forEach((drink) => {
      pricePerServingKeys.forEach((key) => {
        if (drink === key) {
          total += obj[key];
        }
      });
    });
    return { ...employee, total };
  });
};
//get price per serving
const pricePerServing = (recipes) => {
  let pricePerOne = {};

  let { coffee, water, milk } = prices;

  for (let key in recipes) {
    pricePerOne[key] =
      (recipes[key].coffee ? recipes[key].coffee * coffee : 0) +
      (recipes[key].water ? recipes[key].water * water : 0) +
      (recipes[key].milk ? recipes[key].milk * milk : 0);
  }

  return pricePerOne;
};

const invitedEmployees = (m) => {
  let sum = 0;
  let invated = [];
  const empls = addTotalPriceToEmployees(employees, pricePerServing(recipes));
  empls.sort((a, b) => a.total - b.total);

  empls.forEach((item) => {
    sum += item.total;
    if (sum <= m) {
      invated.push(item);
    }
  });
  return invated
    .map(({ id, name, drinks }) => ({ id, name, drinks }))
    .sort((a, b) => a.id - b.id);
};

console.log(invitedEmployees(0.1));
