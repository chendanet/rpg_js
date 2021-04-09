class Fighter extends Character {
  constructor() {
    super({
      name: 'Grace',
      type: 'Fighter',
      hp: 12,
      mana: 40,
      dmg: 4
    });
    this.armor = 0;
  }

  /**
   * Inflige les dégâts spéciaux à l'adversaire
   * @param opponent
   */
  dealSpecialDamage(opponent) {
    // vérifie s'il a assez de mana
    if (this.mana < 20) {
      console.error(`Pas assez de mana!`);
      return false;
    }

    this.mana -= 20;
    // 2 points d'armure en plus pour ce tour
    this.armor = 2;

    const specialDmg = 5;
    opponent.takeDamage(specialDmg);
    console.group(`${ this.name } attaque ${ opponent.name } avec sa compétence Dark Vision!`);
    console.log(`Il lui inflige ${ specialDmg } de dégâts spéciaux.`);
    console.log(`Et il reçoit 2 points de dégâts en moins jusqu'au prochain tour.`);
    console.groupEnd();

    return true;
  }

  /**
   * Reçoit une attaque
   * @param dmg le nombre de dégats reçu
   */
  takeDamage(dmg) {
    // Si le nombre de dégats reçu est supérieur à la vie, le joueur a perdu
    this.hp = (this.hp + this.armor) - dmg;
    this.hp = Math.max(0, this.hp); // le nombre de points de vie ne peut être négatif

    if (this.armor > 0) {
      console.log(`${ this.name } perd 2 dégâts en moins grâce à sa compétence Dark Vision.`);
    }
  }
}
