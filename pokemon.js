//Your code here!

//Pokemon class with attributes as in the example given in the prompt
function Pokemon(name, attack, defense, health, type) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;
  this.type = type;

//takeDamage
  this.takeDamage = function(number){ //takeDamage reduces the health by the number passed in. If the number is > health it simply returns 0
    if (number > this.health){
      this.health = 0;
    } else {
      this.health = this.health - number;
    }
  }

  //I was wondering if this should have included the defense for exampe Damage = attack-defence
  //and then the health gets reduced by that. But I followed what the prompt said (dmg = health-atk)


//attackOpponent
  this.attackOpponent = function(name){ //dmg = pokemon atk - opponent defence
    if (name.defense > this.attack){ //at least a dmg of 1 will be made
      name.takeDamage(1);
    } else{
      name.takeDamage(this.attack-name.defense);
    }

  }

///display
  this.display = function(){  //Converts the name and type to uppercase and returns them with the health/init_health
    let init_health;
    init_health = health;

    var disp = this.name.toUpperCase() + " " + "(" + this.type.toUpperCase() + ")" + " " + this.health + "/" + init_health;
    return disp;
  }



}

const pikachu = new Pokemon('Pikachu', 15, 9, 45, 'electric'); //initialized a pokemon called Pikachu
const charles = new Pokemon('Charles', 20, 10, 30, "fire")
//testing the class Pokemon
//console.log(pikachu.name);
//console.log(pikachu.attack);
//console.log(pikachu.defense);
//console.log(pikachu.health);
//console.log(pikachu.type);

//testing takeDamage
//pikachu.takeDamage(50);
//console.log(pikachu.health);

//testing display
//pikachu.health = 12
//console.log(pikachu.display());

//testing attackOpponent
//pikachu.attackOpponent(charles);
//pikachu.attackOpponent(charles);
//charles.display();

// Don't edit this line!
module.exports = Pokemon;
