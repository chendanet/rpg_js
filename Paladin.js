class Paladin extends Character {
  constructor() {
    super({
      name: 'Ulder',
      type: 'Paladin',
      hp: 16,
      mana: 160,
      dmg: 3
    });
  }

  /**
   * Inflige les dégâts spéciaux à l'adversaire
   * @param opponent
   */
  dealSpecialDamage(opponent) {
    // vérifie s'il a assez de mana
    if (this.mana < 40) {
      console.error(`Pas assez de mana!`);
      return false;
    }

    this.mana -= 40;
    // se soigne de 5 points de vie
    this.hp += 5;

    const specialDmg = 4;
    opponent.takeDamage(specialDmg);
    console.group(`${ this.name } attaque ${ opponent.name } avec sa compétence Healing Lighting!`);
    console.log(`Il lui inflige ${ specialDmg } de dégâts spéciaux.`);
    console.log(`Il se soigne de 5 points de vie.`);
    console.groupEnd();

    return true;
  }
}
