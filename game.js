class Game {
  constructor(turnCount = 10) {
    this.turnCount = turnCount; // nombre de tours restants
    this.numTurn = 0;
    this.characters = []; // les personnages du jeu
  }

  get turnLeft() {
    return this.turnCount - this.numTurn;
  }

  get playingCharacters() {
    return this.characters.filter(c => c.isPlaying());
  }

  get winners() {
    return this.characters.filter(c => c.hasWon());
  }

  /**
   * Ajoute un personnage
   * @param character
   */
  addCharacter(character) {
    this.characters.push(character);
  }

  /**
   * Débute le jeu
   */
  start() {
    if (this.numTurn > 0) {
      console.error('Le jeu a déjà débuté!!');
      Turn.currentTurn.showCurrentTurn();
      return;
    }
    this.newTurn();
  }

  newTurn() {
    // on finit le jeu s'il ne reste plus qu'un joueur ou s'il n'y a plus de tours restants
    if (this.playingCharacters.length === 1 || this.turnLeft === 0) {
      this.endGame();
      return;
    }

    this.numTurn++;
    new Turn(this); // envoie l'objet Game en cours à Turn en paramètre
  }

  endTurn() {
    // réinitialise les points de vie spéciaux des personnages s'ils en possèdent
    this.playingCharacters.forEach(c => {
      c.armor = 0;
    });

    // s'il n'y a plus de tours restants, on finit le jeu
    if (this.turnLeft === 0) {
      this.endGame();
    } else {
      this.newTurn();
    }
  }

  endGame() {
    this.playingCharacters.forEach(c => {
      c.status = 'winner';
    });

    console.group(`Le jeu est fini!`);
    console.log(`Les joueurs gagnants sont: ${ this.winners.map(c => c.name).join(', ') }`);
    console.groupEnd();
  }

  /**
   * Affiche les informations des joueurs encore vivants
   */
  watchStats() {
    console.log(`Les joueurs restants sont:`);
    this.playingCharacters.forEach(c => {
      c.showStats();
    });
  }
}
