import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fav = true;
  valorDado = 0;
  search = '';
  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  };
  dados = [
    {
      classe: 'Bárbaro',
      descricao:
        'A fierce warrior of primitive background who can enter a battle rage',
    },
    {
      classe: 'Bardo',
      descricao:
        'An inspiring magician whose power echoes the music of creation',
    },
    {
      classe: 'Paladino',
      descricao: 'A holy warrior bound to a sacred oath',
    },
    {
      classe: 'Mago',
      descricao:
        'A scholarly magic-user capable of manipulating the structures of reality',
    },
    {
      classe: 'Druída',
      descricao:
        'A priest of the Old Faith, wielding the powers of nature and adopting animal forms',
    },
  ];

  users = [
    {
      username: 'Yoda',
      avatar:
        'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
    },
    {
      username: 'Gamora',
      avatar:
        'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/gamora/gamora-profile.jpg',
    },
    {
      username: "T'Challa",
      avatar:
        'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
    },
  ];

  favoritar() {
    this.fav = !this.fav;
  }

  rolarD20() {
    this.valorDado = Math.floor(Math.random() * 20 + 1);
  }

  pesquisar(event) {
    this.search = event.target.value;
  }

  getValues(value: string, campo: string) {
    this.cadastro[campo] = value;
  }

  printCadastro(event) {
    event.preventDefault();
    console.log(this.cadastro);
  }
}
