class Assassin extends Character {
    constructor(pseudo) {
        super('Carl', "l\'Assassin'", 16, 160, 3); // to use the constructor of heritate class, we use super
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque; // en parametre perso est Tork ici ; Tork.sante -= Gandalf.attaque;
        // la propriété attaque de Gandalf va automatiquement être déduite des PDV  
        console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un sort (' + this.attaque + ' degats)');

        this.evoluer(); //personnage courant et pas l'adversaire !
        personnage.verifierSante(); //de l'adversaire 
    }
      
    coupSpecial(personnage) { //PREVOIR SELON LES TYPES DE PERSO !
        personnage.sante -= this.attaque * 2; // en parametre perso est Tork ici ; Tork.sante -= Gandalf.attaque;
        // la propriété attaque de Gandalf va automatiquement être déduite des PDV  
        console.log(this.pseudo + ' attaque avec son coup spécial ' + personnage.pseudo + ' en lançant un sort (' + this.attaque * 2 + ' degats)');

        this.evoluer(); //personnage courant et pas l'adversaire !
        personnage.verifierSante(); //de l'adversaire 
    }
    
}


// darkVision = () => {

//     this.hp     = this.hp -2;
//     this.mana   = this.mana -20;
//     this.dmg    = this.dmg +5;
// }