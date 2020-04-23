const Potion = require('../lib/Potion.js');
const Character = require('./Character');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
    this.potion = new Potion();
}

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};
  
module.exports = Enemy;
