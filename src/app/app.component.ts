import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  fav = true;

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
    // TODO
  }
}
