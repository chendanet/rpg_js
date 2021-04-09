class Berzerker extends Character {
  constructor() {
    super({
      name: 'Draven',
      type: 'Berzerker',
      hp: 8,
      mana: 0,
      dmg: 4
    });
    this.specialDmg = 0;
  }

  /**
   * Inflige les dégâts spéciaux à l'adversaire
   * @param opponent
   */
  dealSpecialDamage(opponent) {
    // vérifie s'il a assez de vie
    if (this.hp === 1) {
      console.error(`Pas assez de points de vie!`);
      return false;
    }

    // rajoute des dégâts spéciaux et retire 1 point de vie
    this.specialDmg++;
    this.hp--;

    console.log(`${ this.name } utilise sa compétence Rage! Il augmente ses dégâts de 1 mais perd 1 de vie.`);

    return true;
  }

  /**
   * Inflige les dégâts normaux à l'adversaire
   * @param opponent
   */
  dealNormalDamage(opponent) {
    // inflige des dégâts à l'adversaire
    opponent.takeDamage(this.dmg + this.specialDmg);

    console.group(`${ this.name } attaque ${ opponent.name }.`);
    console.log(`Il lui inflige ${ this.dmg } de dégâts.`);
    console.groupEnd();

    return true;
  }
}
