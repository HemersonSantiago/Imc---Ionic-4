import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListaPage  } from '../lista/lista.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-imc',
  templateUrl: 'imc.page.html',
})
export class ImcPage {
  Altura: number;
  Peso: number;
  Resultado: number;
  Mensagem: string;
  Nome: string;
  listImc: any = [];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  calcIMC(){
    if (this.Peso > 0 && this.Altura > 0) {
      let finalIMC = this.Peso / (this.Altura / 100 * this.Altura / 100);
      this.Resultado = parseFloat(finalIMC.toFixed(2));
      this.IMCMensagem();
    }
  }
  private IMCMensagem() {  
    if (this.Resultado < 18.5){
      this.Mensagem = "Peso baixo"
    }
    if (this.Resultado >= 18.5 && this.Resultado <= 24.99) {
      this.Mensagem = "Normal"
    }
    if (this.Resultado >= 25 && this.Resultado <= 29.99) {
      this.Mensagem = "Sobrepeso"
    }
    if (this.Resultado >= 30) {
      this.Mensagem = "Obeso"
    }
    }
    gravaIMC(){
      // this.listImc.push("Nome: "+this.Nome+" "+ "Imc: "+this.Resultado);
      let dados = {
        nome: this.Nome,
        imc: this.Resultado,
        msg: this.Mensagem
      }

      this.listImc.push(dados)
      this.storage.set('imc', this.listImc);
			console.log("TCL: ImcPage -> gravaIMC -> this.storage", this.storage)
			console.log("TCL: ImcPage -> gravaIMC -> dados", dados)
    } 
    gotolist(){
      this.navCtrl.navigateForward('');
    }
  }

