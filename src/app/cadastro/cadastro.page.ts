import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  Usuario: string;
  Senha: string;
  listUsuario: any = [];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  cancelar() {
    this.navCtrl.navigateForward('home');
  }
  cadastrar() {
    let dadosUsuario = {
      usuario: this.Usuario,
      senha: this.Senha
    };
    this.listUsuario.push(dadosUsuario);
    this.storage.set('usuario', this.listUsuario);
    this.navCtrl.navigateForward('home');
  }
}
