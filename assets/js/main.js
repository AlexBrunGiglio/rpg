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
    histoireButton.innerHTML=" ";

    histoireButton.innerHTML="<button class='btn btn-dark prologue-btn' onclick='hero();'><i class='fas fa-caret-square-right'></i> Suivant</button>"
}

let vie = 0 ;
let vitesse = 0;
let armure = 0;
let degatsmin = 0;
let degatsmax = 0;
let mana = 0;
let runes = 100;
let type_classe;

function hero() {
   let valeur = document.querySelector('input[name="exampleRadios"]:checked').value;
   let selectHero = document.getElementById('histoireButton');
   histoireButton.innerHTML=" ";

   histoireButton.innerHTML="<button class='btn btn-dark prologue-btn' onclick=''><i class='fas fa-caret-square-right'></i> Choix de la classe</button>"

    if (valeur == 0) {
        vie = 14;
        vitesse = 80;
        armure = 40;
        degatsmin = 2;
        degatsmax = 4;
        mana = 20;
        type_classe = "Archer";
        document.cookie = "vie = 14;" 
        document.cookie ="vitesse = 80;" 
        document.cookie ="armure = 40;" 
        document.cookie ="degatsmin = 2;" 
        document.cookie ="degatsmax = 4;" 
        document.cookie ="mana = 20;"
        document.cookie ="type_classe = Archer;"
        console.log("Vous avez obtenu " +vie+ " point de vie")
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
        document.cookie ="vitesse = 60;" 
        document.cookie ="armure = 80;" 
        document.cookie ="degatsmin = 3;" 
        document.cookie ="degatsmax = 8;" 
        document.cookie ="mana = 10;"
        document.cookie ="type_classe = Guerrier;"
        console.log("Vous avez obtenu " +vie+ " point de vie")
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
        document.cookie ="vitesse = 50;" 
        document.cookie ="armure = 60;" 
        document.cookie ="degatsmin = 1;" 
        document.cookie ="degatsmax = 5;" 
        document.cookie ="mana = 50;"
        document.cookie ="type_classe = Mage;"
        console.log("Vous avez obtenu " +vie+ " point de vie")
        console.log("Vous avez choisis la classe Mage !");
    }

    

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