let heroi = {
    nome: "Douglas",
    xp: 900,
    vitoria: 80,
    derrota: 6
  };
  
  const saldoDeVitoria = () => {
    return heroi.vitoria - heroi.derrota;
  };
  

  const determinarNivelHeroi = () => {
    let nivel;
    if (heroi.xp <= 1000) {
      nivel = "Ferro";
    } else if (heroi.xp > 1000 && heroi.xp <= 2000) {
      nivel = "Bronze";
    } else if (heroi.xp > 2000 && heroi.xp <= 5000) {
      nivel = "Prata";
    } else if (heroi.xp > 5000 && heroi.xp <= 7000) {
      nivel = "Ouro";
    } else if (heroi.xp > 7000 && heroi.xp <= 8000) {
      nivel = "Platina";
    } else if (heroi.xp > 8000 && heroi.xp <= 9000) {
      nivel = "Ascendente";
    } else if (heroi.xp > 9000 && heroi.xp <= 10000) {
      nivel = "Radiante";
    } else if (heroi.xp > 10000) {
      nivel = "Imortal";
    }
    return nivel;
  };
  

  const determinarRanking = () => {
    let saldo = saldoDeVitoria();
    let ranking;
  
    if (saldo < 10) {
      ranking = "Baixo";
    } else if (saldo >= 10 && saldo <= 20) {
      ranking = "Moderado";
    } else if (saldo >= 21 && saldo <= 50) {
      ranking = "Bom";
    } else if (saldo >= 51 && saldo <= 80) {
      ranking = "Ótimo";
    } else if (saldo >= 81 && saldo <= 100) {
      ranking = "Excelente";
    } else if (saldo > 100) {
      ranking = "Lendário";
    }
    return ranking;
  };
  
  let nivelHeroi = determinarNivelHeroi();
  let saldoVitorias = saldoDeVitoria();
  
  console.log(`O herói ${heroi.nome} tem um saldo de vitórias de ${saldoVitorias} e está no nível de ${nivelHeroi}.`);