class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.stringth = 3;
  }

  sayName = () => console.log(this.name);

  showStats = () =>
    console.log(
      "Name : " +
        this.name +
        " health : " +
        this.health +
        " speed : " +
        this.speed +
        " stringth : " +
        this.stringth
    );

  drinkSake = () => console.log("health: " + (this.health += 10));
}

// const ninja1 = new Ninja("Hyabusa", 20);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.drinkSake();

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.stringth = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    return this.drinkSake();
  }
}

const Sensei1 = new Sensei("yossif");
console.log("Wisdom : " + Sensei1.wisdom);
Sensei1.speakWisdom();
Sensei1.speakWisdom();
console.log("Name : " + Sensei1.name);
Sensei1.showStats();
