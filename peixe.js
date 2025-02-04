var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
  //Load Background
  this.load.image("fundo", "assets/bg_azul-claro.png");

  //Load Logo
  this.load.image("logo", "assets/logo-inteli_branco.png");

  //Aleatorizar escolha do Peixe
  var imagemPeixe = [
    "assets/peixes/baiacu.png",
    "assets/peixes/baiacu_lado.png",
    "assets/peixes/concha.png",
    "assets/peixes/crustaceo.png",
    "assets/peixes/peixe_amarelo.png",
    "assets/peixes/peixe_listra.png",
    "assets/peixes/peixe_logo.png",
    "assets/peixes/peixe_rosa.png",
    "assets/peixes/peixe_serio.png",
    "assets/peixes/peixe_turquesa.png",
    "assets/peixes/peixe_verde.png",
    "assets/peixes/peixinho_azul.png",
    "assets/peixes/peixinho_laranja.png",
    "assets/peixes/peixinho_rosa.png",
    "assets/peixes/peixinho_roxo.png",
    "assets/peixes/tartaruga.png",
    "assets/peixes/tubarao.png",
  ];

  var imagemEscolhida = Math.floor(Math.random() * imagemPeixe.length);

  //Load Peixe
  this.load.image("peixe", imagemPeixe[imagemEscolhida]);
}

function create() {
  //Background
  this.add.image(400, 300, "fundo");

  //Logo
  this.add.image(400, 525, "logo").setScale(0.5);

  //Peixe
  peixinho = this.add.image(400, 300, "peixe");
  peixinho.setFlip(true, false);

  document.getElementById("button").innerHTML =
    '<button onclick="window.location.reload();">Recarregar a página para mudar de peixe</button>';
}

function update() {
  //Move o Peixe de acordo com a posição do mouse
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}
