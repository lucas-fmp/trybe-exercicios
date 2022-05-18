const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (50 - 15) + 15);

const warriorDamage = () => Math.floor(Math.random() * (60 - 30) + 30);

const mageDamageAndManaSpendPerTurn = () => {
  let mana = 125;
  if (mana > 15) {
    const damageAndMana = {};
    damageAndMana.damage = Math.floor(Math.random() * (90 - 45) + 45);
    damageAndMana.mana = 15;
    return damageAndMana;
  } else {
    console.log('Não possui mana suficiente');
  }
};