export default function groceriesList() {
  const groceriesMap = new Map();
  const groceriesList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  groceriesList.forEach(([key, value]) => groceriesMap.set(key, value));
  return groceriesMap;
}
