import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  Usuario: string;
  Senha: string;
  usuarioStorage: any;
  senhaStorage: any;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  entrar() {
    this.storage.get('usuario').then((val) => {
      val.map((val) => {
        this.usuarioStorage = val.usuario;
        this.senhaStorage = val.senha;
      })
      // this.usuarioStorage = val[0].usuario;
      // this.senhaStorage = val[0].senha;
      console.log(this.usuarioStorage);
      console.log(this.senhaStorage);
    }).catch((error) => {
      alert('Não foi possivel buscar os dados');
    });

    // console.log(this.Usuario);
    // console.log(this.Senha);
    if((this.Usuario && this.Usuario === this.usuarioStorage) && (this.Senha === this.senhaStorage)) {
      this.navCtrl.navigateForward('imc');
    } else {

    }
  }

  cadastrar() {
    this.navCtrl.navigateForward('cadastro');
  }
}

