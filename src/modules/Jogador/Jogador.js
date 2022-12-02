export class Jogador {
  constructor(nick, vidaInicial) {
    this.nick = nick;
    this.vidaInicial = vidaInicial;
    this.vencedor = false;
  }
  makeThisWin(){
    this.vencedor = true
  }
  getCard(){
    return (
      <div className="CardJogador">
      <div className="PlayserInfo"></div>
      <div className="ControlesVida">
        <div className="botaoMenosVida"></div>
        <div className="display">  </div>
        <div className="botaoMaisVida"></div>
      </div>
    </div>
    )
  }
}
