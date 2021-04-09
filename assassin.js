class Assassin extends Character {
  constructor() {
    super({
      name: 'Carl',
      type: 'Assassin',
      hp: 6,
      mana: 20,
      dmg: 6
    });
    this.specialTurn = 0;
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
    this.specialTurn = Turn.currentTurn.numTurn + 1;

    const specialDmg = 7;
    opponent.takeDamage(specialDmg);
    console.group(`${ this.name } attaque ${ opponent.name } avec sa compétence Shadow Hit!`);
    console.log(`Il lui inflige ${ specialDmg } de dégâts spéciaux.`);
    console.log(`Il ne prendra pas de dégâts lors du prochain tour.`);

    // si l'adversaire n'est pas mort suite au coup spécial, il perd aussi des dégâts
    if (opponent.hasLost() === false) {
      console.log(`Par contre il prend 7 de dégâts car ${ opponent.name } est toujours vivant.`);
      this.takeDamage(7);

      if (this.hasLost()) {
        console.log(`Et ce con est mort par sa stupidité!`);
      }
    }

    console.groupEnd();

    return true;
  }

  /**
   * Reçoit une attaque
   * @param dmg le nombre de dégats reçu
   */
  takeDamage(dmg) {
    // si le tour en cours est le special Shadow Hit, l'assassin ne prend pas de dégâts
    if (this.specialTurn === Turn.currentTurn.numTurn) {
      console.log(`${ this.name } ne prend pas de dégâts pour ce tour.`);
      return;
    }

    // Si le nombre de dégats reçu est supérieur à la vie, le joueur a perdu
    this.hp = this.hp - dmg;
    this.hp = Math.max(0, this.hp); // le nombre de points de vie ne peut être négatif

    if (this.hp <= 0) {
      this.status = 'loser';
    }
  }
}
