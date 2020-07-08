const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];
for (dragon of dragons) console.log(dragon);

// calling the Symbol.iterator method on dragons
const iterator = dragons[Symbol.iterator]();
console.log(iterator); // { [Iterator] }
console.log(iterator.next()); // { value: 'cool dragon', done: false }
console.log(iterator.next()); // { value: 'angry dragon', done: false }
console.log(iterator.next()); // { value: 'angry dragon', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'tiny'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];
  return `${randomItem(dragonSizes)} ${randomItem(dragonAbilities)} dragon`;
};

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragons = Math.random() > 0.25;
        return enoughDragons
          ? { value: makeDragon(), done: false }
          : { done: true };
      }
    };
  }
};

for (dragon of dragonArmy) console.log(dragon);
