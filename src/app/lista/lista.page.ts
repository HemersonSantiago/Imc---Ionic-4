
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
})
export class ListaPage {
  Imc: any;
  
  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ngOnInit(){
    let buscaDados = this.storage.get('imc').then((val) => {
      console.log('Your age is', val);
      this.Imc = val;
    }).catch((error) => {
      alert('Não foi possivel buscar os dados')
    });
  }
  ionviewdidload(){
    console.log('ionviewdidload ListaPage');
    this.Imc =JSON.parse(localStorage.getItem('imc'));
  }
  gotocalculo(){
    this.navCtrl.navigateForward('home');
  }

}
