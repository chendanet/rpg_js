class Monk extends Character {
  constructor() {
    super({
      name: 'Moana',
      type: 'Monk',
      hp: 8,
      mana: 200,
      dmg: 2
    });
  }

  /**
   * Inflige les dégâts spéciaux à l'adversaire
   * @param opponent
   */
  dealSpecialDamage(opponent) {
    // vérifie s'il a assez de mana
    if (this.mana < 25) {
      console.error(`Pas assez de mana!`);
      return false;
    }

    this.mana -= 25;
    // se soigne de 8 points de vie
    this.hp += 8;

    console.log(`${ this.name } utilise sa compétence Healing Lighting! Il se soigne de 8 points de vie.`);

    return true;
  }
}
