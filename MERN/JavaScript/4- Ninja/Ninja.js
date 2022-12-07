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
      this.name +
        " health: " +
        this.health +
        " speed: " +
        this.speed +
        " stringth: " +
        this.stringth
    );

  drinkSake = () => console.log("health: " + (this.health += 10));
}

const ninja1 = new Ninja("Hyabusa", 20);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
