class Turn {
  static currentTurn = null; // tour en cours
  static characterAllowedToPlay = null; // le joueur qui doit jouer

  get numTurn() {
    return this.game.numTurn;
  }

  constructor(game) {
    this.game = game; // stocke le jeu en cours
    this.characters = game.playingCharacters; // on stocke la liste des joueurs encore vivant

    Turn.currentTurn = this;
    console.log(`Le tour n°${ this.numTurn } peut commencer (il reste ${ this.game.turnLeft } tour(s)).`);
    this.nextCharacterTurn();
  }

  nextCharacterTurn() {
    // si la liste de personnage restant à jouer est vide, on finit le tour
    if (this.characters.length === 0) {
      console.log(`Fin du tour.`);
      this.game.endTurn();
    } else {
      Turn.characterAllowedToPlay = this.characters[0];
      this.showCurrentTurn();
    }
  }

  showCurrentTurn() {
    console.log(`C'est au tour de ${ this.characters[0].name } de jouer.`);
  }

  endCharacterTurn() {
    // met à jour la liste des personnages pouvant jouer
    // car un personnage a pu mourir au dernier tour d'un personnage
    this.characters = this.characters.filter(c => c.isPlaying());

    // retire le premier personnage de la liste
    this.characters.shift();
    // passe au prochain personnage
    this.nextCharacterTurn();
  }
}
