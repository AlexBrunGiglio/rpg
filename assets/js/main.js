function newGame() {
    let mainTitle = document.getElementById('mainTitle');
    let mainButton1 = document.getElementById('mainButton1');
    let mainButton2 = document.getElementById('mainButton2');
    mainTitle.innerHTML = " ";
    mainButton1.innerHTML = " ";
    mainButton2.innerHTML = " ";

    mainTitle.innerHTML = "<div class='titleNew' id='mainTitle'> Bonjour à toi aventurier avant de commencer peux-tu m’indiquer ton nom ?</div>";
    mainButton1.innerHTML = "<div class='inputNew text-center'> <div class='input-group'><input id='name' type='text' class='form-control' placeholder='Pseudo du joueur' aria-label='Pseudo'></div><button class='btn btn-dark' type='button' onclick='playerName();'>Choisir ce pseudo</button></div>"
}


function playerName() {
    let name = document.getElementById('name').value;
    console.log(name);
    mainButton2.innerHTML = "<div class='text-left response'>" + name + " c'est ça ? </div>"
    let choose = document.createElement("a");
    choose.innerHTML = "<button class='btn btn-dark choose' type='button' onclick='goto();';>Choisir ce pseudo</button>"
    // choose.innerHTML = "<button class='btn btn-dark choose' type='button' href='histoire.html'>Choisir ce pseudo</button>"
    document.body.appendChild(choose);
    // choose.classList.add("btn", "btn-dark", "choose");
}


function goto() {
    console.log(document);
    window.location.href = "histoire.html";
}

function gohome() {
    console.log(document);
    window.location.href = "index.html";
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function histoire() {
    let chooseclass = document.getElementById('choix-classe').style.display = "block";
    let historyClass = document.getElementById('histoireButton');
    histoireButton.innerHTML = " ";

    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='hero();'><i class='fas fa-caret-square-right'></i> Choisir cette classe !</button>"
}

let vie = 0;
let vitesse = 0;
let armure = 0;
let degatsmin = 0;
let degatsmax = 0;
let mana = 0;
let runes = 100;
let type_classe;
let vieVoyageur = 10;
let papier = 1;

function hero() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;
    let selectHero = document.getElementById('histoireButton');

    if (valeur == 0) {
        vie = 14;
        vitesse = 80;
        armure = 40;
        degatsmin = 2;
        degatsmax = 4;
        mana = 20;
        type_classe = "Archer";
        document.cookie = "vie = 14;"
        document.cookie = "vitesse = 80;"
        document.cookie = "armure = 40;"
        document.cookie = "degatsmin = 2;"
        document.cookie = "degatsmax = 4;"
        document.cookie = "mana = 20;"
        document.cookie = "type_classe = Archer;"
        console.log("Vous avez obtenu " + vie + " point de vie")
        console.log("Vous avez choisis la class Archer !");
    }

    else if (valeur == 1) {
        vie = 17;
        vitesse = 60;
        armure = 80;
        degatsmin = 3;
        degatsmax = 8;
        mana = 10;
        type_classe = "Guerrier";
        document.cookie = "vie = 17;"
        document.cookie = "vitesse = 60;"
        document.cookie = "armure = 80;"
        document.cookie = "degatsmin = 3;"
        document.cookie = "degatsmax = 8;"
        document.cookie = "mana = 10;"
        document.cookie = "type_classe = Guerrier;"
        console.log("Vous avez obtenu " + vie + " point de vie")
        console.log("Vous avez choisis la classe Guerrier !");
    }

    else if (valeur == 2) {
        vie = 16;
        vitesse = 50;
        armure = 60;
        degatsmin = 1;
        degatsmax = 5;
        mana = 50;
        type_classe = "Mage";
        document.cookie = "vie = 16;"
        document.cookie = "vitesse = 50;"
        document.cookie = "armure = 60;"
        document.cookie = "degatsmin = 1;"
        document.cookie = "degatsmax = 5;"
        document.cookie = "mana = 50;"
        document.cookie = "type_classe = Mage;"
        console.log("Vous avez obtenu " + vie + " point de vie")
        console.log("Vous avez choisis la classe Mage !");
    }

    let chooseclass = document.getElementById('choix-classe').style.display = "none";
    let storyNext = document.getElementById('storyNext');
    storyNext.innerHTML = "Vous allez à présent débuter l'aventure ! <br> Vous obtenez 100 runes qui vous permettrons d'avancer dans votre aventure. <br> Un conseiller vous remets un laissé passer permettant de se rendre partout dans la nation. <br> Bon courage !";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='histoire1()'><i class='fas fa-caret-square-right'></i> Commencer l'aventure</button>";
}

function histoire1() {
    let prop1 = document.getElementById('storyNext');
    let choix1 = document.getElementById('choix-classe');


    choix1.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choix1()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop1.innerHTML = "Vous sortez du chateau du roi, vous devez à présent choisir votre priorité : "
    choix1.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Chercher des informations en ville</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Partir directement</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";

    choix1 = document.getElementById('choix-classe').style.display = "block";


}

function choix1() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        informations()
    }

    else {
        leave()
    }
}

function informations() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixInfo()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Hmmm... Pour trouver des informations les lieux les plus vivants sont la Taverne de la place ou les Quartiers. <br> Que choisis tu ? "
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Taverne</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Quartiers</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
}

function choixInfo() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        taverne()
    }

    else {
        quartiers()
    }
}

function leave() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');
    console.log(papier);

    if (papier == 1) {
        choix.innerHTML = " ";
        histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixDest()'><i class='fas fa-caret-square-right'></i> Valider</button>";

        prop.innerHTML = "Vous quittez la capitale. <br> Quelle est votre destination ? "
        choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Nord</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Est</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Ouest</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='2'> </div></div><div class='col'> <h6 class='class-name'>Sud</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='3'> </div></div></div>";
    } else {
        choix.innerHTML = " ";
        histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixGarde()'><i class='fas fa-caret-square-right'></i> Valider</button>";

        prop.innerHTML = "Un garde vient à votre rencontre et remarque que vous n'avez pas de laissé-passer. <br> Vous lui expliquez tant bien que mal la situation, le garde veux vous arreter. "
        choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Se battre</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Fuir</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Se laisser arreter par le garde</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
    }

}
function choixGarde() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 2) {
        fail();
    }

    else {
        garde();
    }
}

function garde() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='gohome()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Au moment de faire quoi que ce soit, quatre autres gardes arrivent, au moindre pas vous mourrez. <br> Vous n'avez pas pu réaliser votre quête. "

}

function choixDest() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 1) {
        debutAventure();
    }

    else {
        fail()
    }
}

function fail() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='gohome()'><i class='fas fa-caret-square-right'></i> Quitter</button>";

    prop.innerHTML = "Malheureusement votre choix n'était pas le bon... <br> Vous avez perdu du temps et la nation d'Ekona a obtenu le pouvoir..."
    choix1 = document.getElementById('choix-classe').style.display = "none";

}

function taverne() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixTaverne()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Au comptoir un homme semble seul et à votre gauche vous voyez un groupe de voyageurs qui discute. <br> A qui souhaitez vous discuter ?"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>L'homme seul</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Le groupe d'homme</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
}

function choixTaverne() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        comptoir()
    }

    else {
        groupe()
    }
}

function comptoir() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixComptoir()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "- Tu ne ressembles pas à ces autres voyageurs... <br> Je n'aime pas la compagnie je suis navré, je te demande de partir. "
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Insister</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Laisser l'homme seul</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";

}

function choixComptoir() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        reponseHomme();
    }

    else {
        taverne();
    }
}

function reponseHomme() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='leave()'><i class='fas fa-caret-square-right'></i> Le remercier</button>";

    prop.innerHTML = "- Je t'ai demandé de me laisser seul. <br> - Mais comme tu m'as l'air déterminé je veux bien disctuter un peu avec toi.. <br> <i>Vous expliquez la situation</i> <br> - Ah je comprends mieux... J'ai un ami qui connait bien ces objets magiques, il vit... si je me souviens bien... <br> <i>Vous écoutez attentivement</i> <br> -Hmmm, il vit dans un village à l'Est de la capitale  "

}


function groupe() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixGroupe()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Aie.. Vous êtes tombé sur un groupes de voyageurs complétement imbibé d'alcool. <br> Un des voyageurs se jete sur vous. <br> Vous devez vous battre !"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Vous dégainez votre arme !</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Vous fuyez !</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
}

function choixGroupe() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        combat();
    }

    else {
        leave();
    }
}

function combat() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixCombat()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "<i>Un voyageur possède " + vieVoyageur + " points de vie</i>"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Attaquer</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Esquiver</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
}

function choixCombat() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {

        let result = attaque(degatsmin, degatsmax);
        console.log(result);
        let lifeVoya = vieVoyageur - result;
        vieVoyageur = lifeVoya;

        if (vieVoyageur > 0) {
            let prop = document.getElementById('storyNext');
            let choix = document.getElementById('choix-classe');

            choix.innerHTML = " ";
            histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixCombat()'><i class='fas fa-caret-square-right'></i> Valider</button>";

            prop.innerHTML = "Vous faites " + result + " de dégats <br> Il reste " + lifeVoya + " points de vie au voyageur. ";
            choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Attaquer</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Esquiver</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
        }
        else {
            let prop = document.getElementById('storyNext');
            let choix = document.getElementById('choix-classe');

            choix.innerHTML = " ";
            histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='taverne()'><i class='fas fa-caret-square-right'></i> Valider</button>";

            prop.innerHTML = "Vous avez battu le voyageur ivre <br> Vous retournez à l'entrée de la taverne";
            choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Attaquer</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Esquiver</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";
        }


    }

    else {
        // METTRE ICI Esquive
    }
}

function attaque(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quartiers() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixQuartiers()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "La capitale est très grande.. Il y a une grande fêtes dans les quartiers Sud, il rique d'y avoir beaucoup de monde... <br> Les quartiers Nord sont calmes, il n'y a que les bourges de la cité. <br> De quel côté souhaitez-vous vous rendre ?"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Quartiers Sud de la capitale</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Quartiers Nord de la capitale</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";

}

function choixQuartiers() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        quartiersS();
    }

    else {
        quartiersN();
    }
}

function quartiersS() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');
    papier = 0;

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='quartiersN()'><i class='fas fa-caret-square-right'></i> Vous allez dans les quartiers Nord dans le doute</button>";

    prop.innerHTML = "Décidemment aujourd'hui la musique et l'ambiance sont très présente. <br> Vous n'êtes plus concentré sur la missions d'ailleurs... <br> Vous interrogez des gens mais personne n'a l'air de savoir quoi que ce soit."

}

function quartiersS2() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');
    papier = 1;

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick=''><i class='fas fa-caret-square-right'></i> Vous allez dans les quartiers Nord dans le doute</button>";

    prop.innerHTML = "La musique vous fait danser jusqu'à ce que vous trouviez une lettre par terre.. <br> <b>C'est votre laissé-passer</b> <br> Vous êtes chanceux malgrè vous."

}

function quartiersN() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixNord()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "A l'inverse du Sud de la capitale, le Nord est bien plus calme. C'est tellement calme que vous ne rencontrez personne. <br> Vous avez déjà perdu du temps que faites vous ?"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Retournez Quartiers sud de la capitale</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Aller à la Taverne</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Quitter la capitale</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='2'> </div></div></div>";

}

function choixNord() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        quartiersS2();
    }

    else if (valeur == 1) {
        taverne();
    }
    else {
        leave();
    }
}

function debutAventure() {
    document.body.style.backgroundImage = "url('assets/img/bg-aventure.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100vh";

    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixKaleos()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Vous arrivez dans le village de Kaleos. Cité impériale et portuaire. <br> Cette ville est remplie de garde, ne perdez pas votre laissé-passer. <br> Vous réfléchissez à quelquechose... <br> Vous ne connaissez pas le nom de la personne que vous devez rencontrer."
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Chercher un Armurier</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Chercher un Brocantier</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Demander aux passants</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='2'> </div></div></div>";
}

function choixKaleos() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        armurier();
    }

    else if (valeur == 1) {
        brocant();
    }
    else {
        passants();
    }
}

function armurier() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixArmur()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Après 20 minutes de recherches vous trouvez une vieille boutique de couteau un peu étrange. <br> Souhaitez vous entrer ?"
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Oui</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Non</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";

}

function choixArmur() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;
    if (valeur == 0) {
        magie();
    }
    else {
        debutAventure();
    }
}

function magie() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixMagie()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Une vieille femme apparait et en même temps votre arme commence à briller. <br> - C'est normal, ne t'affole pas. <br> Vous l'interrogez sur son prénom <br> <br>- Mon nom n'a pas d'importance, je t'attendais, tu es celui qui doit sauver la nation n'est-ce-pas ? <br> Vous hauchez de la tête. <br> - Ce lieu est un sanctuaire pour les armes bénites que tu as reçu à la capitale.. Tu peux si tu le veux recevoir une bénédiction qui te réservera des surprises. "
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Accepter</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Refuser</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div></div>";

}

function choixMagie() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;
    if (valeur == 0) {
        let i = 1;

        if (type_classe === "Archer" && i == 1) {
            vitesse = vitesse + 1;
            console.log(vitesse);
            magieSuite();


        } else if (type_classe === "Guerrier") {
            mana = mana + 10;
            console.log(mana);
            magieSuite();

        } else {
            degatsmin = degatsmin + 1;
            console.log(degatsmin);
            magieSuite();
        }
    }
    else {

    }
}

function magieSuite() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='retoursRue()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Bon maintenant je dois te prévenir la route pour trouver la relique et très longue, elle est aussi semé d'embuche. <br> A partir de maintenant je ne peux plus t'aider bon courage. <br> <i>Vous demandez la position de la relique</i> <br> La vieille femme vous mets dehors sans que vous ne puissiez y répondre."
}

function retoursRue() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick='choixKaleos2()'><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Que souhaitez vous faire ? "
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Aller voir les brocantes</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Interpeller des passants</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Se reposer dans une auberge</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='2'> </div></div></div>";

}

function choixKaleos2() {
    let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;

    if (valeur == 0) {
        brocant();
    }
    else if (valeur == 1) {
        passants();
    }
    else {
        auberge();
    }
}


function brocant() {

}

function passants() {
    let prop = document.getElementById('storyNext');
    let choix = document.getElementById('choix-classe');

    choix.innerHTML = " ";
    histoireButton.innerHTML = "<button class='btn btn-dark prologue-btn' onclick=''><i class='fas fa-caret-square-right'></i> Valider</button>";

    prop.innerHTML = "Les passants vous ignores complétement, vous parressez inexistant pour eux."
    choix.innerHTML = "<div class='row radio'> <div class='col'> <h6 class='class-name'>Aller voir les brocantes</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='0' checked> </div></div><div class='col'> <h6 class='class-name'>Interpeller des passants</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='1'> </div></div><div class='col'> <h6 class='class-name'>Se reposer dans une auberge</h6> <div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='2'> </div></div></div>";

}

function auberge() {

}

// Wrap every letter in a span
let textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 0.2,
        delay: (el, i) => 50 * (i + 1)
    });