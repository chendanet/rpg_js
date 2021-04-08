class Fighter extends Character {
    constructor(pseudo) {
        super('Grace', "le/la Fighter", 12, 40, 4, "En vie"); // to use the constructor of heritate class, we use super
    }

    attack(character) {
        character.sante -= this.dmg; //  a.sante -= b.dmg;
        console.log(this.pseudo + ' attaque ' + character.pseudo + ' en donnant des coups (' + this.dmg + ' degats)');

        character.verifierSante(); // de l'adversaire 
    }
      
    darkVision(character) {
        this.type -= -20;
        character.hp -= this.dmg + 5; // en parametre perso est Tork ici ; Tork.sante -= Gandalf.attaque;
        // la propriété attaque de Gandalf va automatiquement être déduite des PDV  
        console.log(this.pseudo + ' attaque avec son coup spécial ' + character.pseudo + ' en donnant des coups  (' + this.dmg +5 + ' degats).');

        this.evoluer(); //personnage courant et pas l'adversaire !
        character.verifierSante(); //de l'adversaire 
    }
     infligeant 5 dégâts. Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.
}


// darkVision = () => {

//     this.hp     = this.hp -2;
//     this.mana   = this.mana -20;
//     this.dmg    = this.dmg +5;
// }