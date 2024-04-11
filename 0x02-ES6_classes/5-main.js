import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building { }

try {
  const t = new TestBuilding(200);
  console.log(t);
} catch (err) {
  console.log(err);
}
