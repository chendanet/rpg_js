class Character {
    constructor(pseudo, hp, mana, dmg) 
    {
        this.pseudo     = pseudo;
        this.type       = type;
        this.hp         = hp;
        this.mana       = mana;
        this.dmg        = dmg;
        this.status     = status;
    }

    get watchStats() { // info status of one character
        return this.pseudo + ' qui est ' + this.type + ' a ' + this.hp + ' de health point (hp) et ' + this.mana + ' de mana.';
       }
       
       
       
           watchStats() {  // If health points (hp) of a character is less than 0 then : '[PSEUDO] a perdu !'
               if(this.hp <= 0) {
                   this.sante == 0; // re initialize to avoid negatif number.
                   console.log(this.pseudo + ' ' + 'a perdu 😵 !')
                   this.status == 'loser';
               }
       }

       manaUpdate() {  
        if personnage.status == 'loser'
        this.mana +20; // gagne 20 de mana après avoir tuer un personnage
        console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !');
    } 

}    

alert('Bienvenue ! Es-tu prêt à te battre à mort pour la prospérité  👊 ?');