// Exo 2 :

alert("Please, look console.");
function Warrior(name, damage, life) {
  this.name = name;
  this.attack = damage;
  this.life = life;


  this.getName = function () {
    console.log("Mon nom est : " + this.name);
  };
  this.getDamage = function () {
    console.log("J'ai comme point d'attaque : " + this.attack + " " + this.name);
  };

  this.getLife = function () {
    console.log("J'ai : " + this.life + " PV " + this.name);
  };

  this.goFight = function (targetName, targetLife, targetAttack) {
    targetLife -= targetAttack;
    console.log("J'attaque " + targetName + ", la cible lui reste : " + targetLife + " PV (PS : " + this.name + " )");

  }
};

function Heal() {

  this.getHealth = function () {
    let randomTarget = Math.round(Math.random());
    if (randomTarget == 1) {
      obi.life += 10;
      console.log("J'ai utilisé une potion de soin. " + obi.name);
    } else if (randomTarget == 0) {
      ennemy.life += 10;
      console.log("J'ai utilisé une potion de soin. " + ennemy.name);
    }
  };
}

function SuperDamage() {

  this.getSuperDamage = function () {


    console.log("Pour rappel voici les dégâts d'Obi Wan actuel : " + obi.attack);
    console.log("Pour rappel voici les dégâts de l'Orc actuel : " + ennemy.attack);


    let randomTargetDamage = Math.round(Math.random());
    if (randomTargetDamage == 0) {
      obi.attack += Math.round((obi.attack / 2));
      console.log("Les dommages d'Obi Wan augmentent ! : " + obi.attack);
    } else if (randomTargetDamage == 1) {
      ennemy.attack += Math.round((ennemy.attack / 2));
      console.log("Les dommages de l'Orc augmentent ! : " + ennemy.attack);
    }
  };
};

function Wizard(name, mana, magics) {
  this.name = name;
  this.mana = mana;
  this.magics = magics;

  this.getName = function () {
    console.log("Je suis le magicien : " + this.name);
  };

  this.getMana = function () {
    console.log("J'ai " + this.mana + " points de mana.");
  };

  this.getMagics = function () {
    console.log("Mon sort de soin est : " + this.magics);
  };

  this.giveHeal = function(targetName, targetLife) {
    this.targetName = targetName;
    this.targetLife = targetLife;
    this.mana -= 20;
    targetLife += 10;
    console.log("Celui-ci me semble dans une mauvaise passe. Voici du heal " + targetName);
    console.log("Et voilà, maintenant t'es points de vie sont à : " + targetLife);
  };
};


var obi = new Warrior("Obi Wan", 10, 500);
var ennemy = new Warrior("Orc", 15, 500);

var wizard = new Wizard("Gandalf", 60, "Hyper Heal");

var heal = new Heal();
var getMoreDomage = new SuperDamage();


obi.getName();
ennemy.getName();

obi.getDamage();
ennemy.getDamage();


obi.getLife();
ennemy.getLife();



while (ennemy.life > 0 && obi.life > 0) {


  ennemy.goFight(obi.name, obi.life, ennemy.attack);
  obi.goFight(ennemy.name, ennemy.life, obi.attack);

  if (ennemy.life > 0 && obi.life > 0) {

    let randomCritics = Math.round(Math.random() * 20);

    if (randomCritics == 1) {
      obi.goFight(ennemy.name, ennemy.life, obi.attack += obi.attack);
      console.log("Coup critique ! " + obi.attack);
    }

    let randomDash = Math.round(Math.random() * 10);

    if (randomDash == 1) {

      console.log("L'Orc a esquivé l'attaque. Et à porté un coup au héro.");
    } else {
      ennemy.life -= obi.attack;
      obi.life -= ennemy.attack;
    }


    let randomDamage = Math.round(Math.random() * 5);

    if (randomDamage == 1) {
      getMoreDomage.getSuperDamage();
    }

    let randomGetWizard = Math.round(Math.random() * 30);

    if (randomGetWizard % 2) {
      wizard.getName();
      wizard.getMana();
      wizard.getMagics();
      if(wizard.mana >= 20){
        let randomGetTargetHeal = Math.round(Math.random());
        if(randomGetTargetHeal == 1){
          wizard.giveHeal(obi.name, obi.life);
        } else {
          wizard.giveHeal(ennemy.name, ennemy.life);
        }
      } else {
        console.log("Je n'ai pu assez de mana pour soigner les personnages.");
        wizard.mana += 10;
      }
    }


    let randomHeal = Math.round(Math.random() * 5);
    if (randomHeal == 1) {
      heal.getHealth();
    }

    if (ennemy.life <= 0) {
      console.log(ennemy.name + " a été tué.");
    }
    if (obi.life <= 0) {
      console.log(obi.name + " a été tué.");
    }
  }
}