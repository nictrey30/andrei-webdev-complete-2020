const winBattle = () => Math.floor(Math.random() * 2);

const experiencePoints = () => (winBattle() ? 10 : 1);

const moveCommand = (direction) => {
  let whatHappens;
  switch (direction) {
    case 'forward':
      whatHappens = 'you encounter a monster';
      break;
    case 'back':
      whatHappens = 'you arrived home';
      break;
    case 'right':
      whatHappens = 'you found a river';
      break;
    case 'left':
      whatHappens = 'you run into a troll';
      break;
    default:
      whatHappens = 'please enter a valid direction';
  }
  return whatHappens;
};
