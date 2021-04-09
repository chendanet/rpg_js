class Character {
  constructor(param) {
    this.name = param.name;
    this.type = param.type;
    this.hp = param.hp;
    this.mana = param.mana;
    this.dmg = param.dmg;
    this.status = 'playing';
  }

  /**
   * Reçoit une attaque
   * @param dmg le nombre de dégats reçu
   */
  takeDamage(dmg) {
    // Si le nombre de dégats reçu est supérieur à la vie, le joueur a perdu
    this.hp = this.hp - dmg;
    this.hp = Math.max(0, this.hp); // le nombre de points de vie ne peut être négatif

    if (this.hp <= 0) {
      this.status = 'loser';
    }
  }

  hasLost() {
    return this.status === 'loser';
  }

  hasWon() {
    return this.status === 'winner';
  }

  isPlaying() {
    return this.status === 'playing';
  }

  /**
   * Attaque un autre personnage
   * @param opponent
   * @param type le type d'attaque
   */
  dealDamage(opponent, type = 'normal') {
    // un personnage ne peut s'attaquer lui-même
    if (opponent === this) {
      console.error(`Un personnage ne peut pas s'attaquer lui-même.`);
      return;
    }

    // on ne peut pas attaquer un personnage mort
    if (opponent.hasLost()) {
      console.error(`${ opponent.name } est déjà mort!`);
      return;
    }

    // vérifie si le joueur peut jouer
    if (Turn.characterAllowedToPlay !== this) {
      console.error(`Ce n'est pas encore le tour de ${ this.name }!!`);
      return;
    }

    switch (type) {
      case 'normal':
        this.dealNormalDamage(opponent);
        break;
      case 'special':
        if (this.dealSpecialDamage(opponent) === false) {
          return;
        }
        break;
      default:
        console.error(`Le type d'attaque ${ type } n'existe pas (normal ou special).`);
        return;
    }

    if (opponent.hp === 0) {
      console.log(`${ opponent.name } est mort!`);
    } else {
      console.log(`Il reste ${ opponent.hp } point(s) de vie restant à ${ opponent.name }.`);
    }

    if (opponent.hasLost()) {
      this.mana += 20;
    }

    // on finit le tour du personnage
    Turn.currentTurn.endCharacterTurn();
  }

  /**
   * Inflige les dégâts normaux à l'adversaire
   * @param opponent
   */
  dealNormalDamage(opponent) {
    // inflige des dégâts à l'adversaire
    opponent.takeDamage(this.dmg);

    console.group(`${ this.name } attaque ${ opponent.name }.`);
    console.log(`Il lui inflige ${ this.dmg } de dégâts.`);
    console.groupEnd();

    return true;
  }

  /**
   * Inflige les dégâts spéciaux à l'adversaire
   * @param opponent
   */
  dealSpecialDamage(opponent) {
    // affiche une erreur si le personnage n'a pas redéfini son attaque spécial
    console.error(`${ this.name } n'a pas d'attaque spéciale!`);
    return false;
  }

  /**
   * Affiche les caractéristiques du personnage
   */
  showStats() {
    console.group(`Joueur ${ this.name }`);
    console.log(`Classe: ${ this.type }`);
    console.log(`Point(s) de vie: ${ this.hp }`);
    console.log(`Mana: ${ this.mana }`);
    console.log(`Dégâts: ${ this.dmg }`);
    console.groupEnd();
  }
}
