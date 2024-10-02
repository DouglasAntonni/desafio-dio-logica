let heroi = {
    nome: "Douglas",
    xp: 8000,
    
}
let mensagemHeroi = "Você é cavaleiro nivel "

if (heroi.xp <= 1000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Ferro");
  } else if (heroi.xp > 1000 && heroi.xp <= 2000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Bronze");
  } else if (heroi.xp > 2000 && heroi.xp <= 5000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Prata");
  } else if (heroi.xp > 5000 && heroi.xp <= 7000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Ouro");
  } else if (heroi.xp > 7000 && heroi.xp <= 8000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Platina");
  } else if (heroi.xp > 8000 && heroi.xp <= 9000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Ascendente");
  } else if (heroi.xp > 9000 && heroi.xp <= 10000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Radiante");
  } else if (heroi.xp > 10000) {
    console.log(heroi.nome + " " + mensagemHeroi + "Imortal");
  }
  

/*switch (nivelDoHeroi) {
    case heroi.xp <= 1.000:
        console.log(heroi.nome + mensagemHeroi + "Ferro")
        break;
        case heroi.xp > 1000 && heroi.xp <= 2000 :
            console.log(heroi.nome + mensagemHeroi + "Bronze")
            break;
            case heroi.xp > 2001 && heroi.xp <= 5000 :
            console.log(heroi.nome + mensagemHeroi + "Prata")
            break;
        case heroi.xp >= 5001  && heroi.xp <= 7000 :
            console.log(heroi.nome + mensagemHeroi + "Ouro")
            break;
        case heroi.xp >= 7001  && heroi.xp <= 8000 :
            console.log(heroi.nome + mensagemHeroi + "Platina")
            break;
        case heroi.xp >= 8001  && heroi.xp <= 9000 :
            console.log(heroi.nome + mensagemHeroi + "Ascendente")
            break;
        case heroi.xp >= 9001  && heroi.xp <= 10000 :
            console.log(heroi.nome + mensagemHeroi + "Radiante")
            break;
        case heroi.xp >= 10001:
            console.log(heroi.nome + mensagemHeroi + "Imortal")
            break;
}
console.log(heroi)*/

