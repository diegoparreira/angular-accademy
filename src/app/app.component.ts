import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valorDado = 0;
  search = '';
  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  };

  classes = [
    {
      avatar:
        'https://pm1.narvii.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg',
      classe: 'Bárbaro',
      descricao:
        'A fierce warrior of primitive background who can enter a battle rage',
      fav: false,
    },
    {
      avatar:
        'https://pm1.narvii.com/7147/2f4df860f773926acbaa1549ab9fcf8518b85382r1-640-960v2_hq.jpg',
      classe: 'Bardo',
      descricao:
        'An inspiring magician whose power echoes the music of creation',
      fav: false,
    },
    {
      avatar:
        'http://1.bp.blogspot.com/_OM5AFsn2jFY/TQ3hDulX-YI/AAAAAAAABuM/WuvDDoR8XBo/s400/mythic_exemplar_by_steven_belledin.jpg',
      classe: 'Paladino',
      descricao: 'A holy warrior bound to a sacred oath',
      fav: false,
    },
    {
      avatar:
        'https://2.bp.blogspot.com/-p44-EhOFnrs/XOdQ8IJaf1I/AAAAAAAAFVA/2uQJdUxIgzwuKQV4tTxV4CVrXU8TBL_4QCLcBGAs/s1600/advinha%25C3%25A7%25C3%25A3o.jpg',
      classe: 'Mago',
      descricao:
        'A scholarly magic-user capable of manipulating the structures of reality',
      fav: false,
    },
    {
      avatar:
        'https://2.bp.blogspot.com/-p44-EhOFnrs/XOdQ8IJaf1I/AAAAAAAAFVA/2uQJdUxIgzwuKQV4tTxV4CVrXU8TBL_4QCLcBGAs/s1600/advinha%25C3%25A7%25C3%25A3o.jpg',
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

  favoritar(index: number) {
    this.classes[index].fav = !this.classes[index].fav;
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

  salvar(event) {
    event.preventDefault();
    console.log(this.cadastro);
    this.classes.push({
      avatar: '',
      classe: this.cadastro.classe,
      descricao: this.cadastro.nome,
    });
  }

  excluir() {
    this.classes.pop();
  }
}
