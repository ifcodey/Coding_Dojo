class Unit {
  // passing the function.
  constructor(name, cost, power, resilience) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }

  // test the function.
  attack(attacker, defender) {
    // attacker.power < defender.power.
    if (attacker.power < defender.power) {
      return (
        "You Lose !, the opponent power " +
        defender.power +
        " higher than yours " +
        attacker.power
      );
      // attacker.power == defender.power.
    } else if (attacker.power == defender.power) {
      return "Nothing happens ! your powers is equal";
    } else {
      // attacker power > defender power.
      defender.power -= attacker.power;
      // defender.power < 0.
      if (defender.power < 0) {
        return "Boooom , your opponent is dead";
      }
    }
  }
}

// the object unit of belt.
const redBelt = new Unit("red belt", 3, 3, 4);
const backBelt = new Unit("black belt", 4, 5, 4);

// ====================================================================
// ====================================================================

//the effect on unit.
class Effect extends Unit {
  constructor(name, cost, text, stat, magnitued) {
    super(name);
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitued = magnitued;
  }

  playHardAlgo(unit) {
    unit.resilience += 3;
  }

  playUnhandledPromise(unit) {
    unit.resilience -= UnhandledPromiseRejection.magnitued;
  }

  playPairProgramming(unit) {
    unit.power += PairProgramming.magnitued;
  }
}

// ====================================================================
// ====================================================================

const HardAlgo = new Effect(
  "Hard Algorithim",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);

const UnhandledPromiseRejection = new Effect(
  "Unhandled Promise",
  1,
  "reduce target's resilience by 2",
  "resilience",
  2
);

const PairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2	",
  "power",
  2
);

// HardAlgo.playHardAlgo(RedBelt);
// console.log(RedBelt.resilience);
// console.log(RedBelt.resilience);
// UnhandledPromiseRejection.playUnhandledPromise(RedBelt);
// console.log(RedBelt.resilience);
console.log(redBelt.power);
PairProgramming.playPairProgramming(redBelt);
console.log(redBelt.power);
// console.log(RedBelt.attack(BlackBelt,RedBelt));
