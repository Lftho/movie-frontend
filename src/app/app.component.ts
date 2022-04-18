import { HttpClient } from '@angular/common/http';
import { Component, OnInit, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Genr {
  id: string,
  name: string
}
export interface BodyClient {
  adult: boolean;
  original_title: string;
  overview: string;
  poster_path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public production = 'Production';
  public development = 'Development';

  filmes: BodyClient[] = [];
  filmes$: Observable<BodyClient[]>

  private readonly base_url = 'https://api.themoviedb.org/3/movie/758724?api_key=a149f45e8661dce384eeb53aeff777b8'; // 76341 = representa o id do filme
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    if (isDevMode()) {
      this.development;
    } else {
      this.production;
    }


    const servic =
      this.http.get<BodyClient>(this.base_url)
        ._subscribe(data => {
          let teste = data.body;
          teste = {
            adult: teste.adult,
            original_title: teste.original_title,
            overview: teste.overview,
            poster_path: `${environment.image_url}/${teste.poster_path}`,
          }

          this.filmes.push(teste);
        });

    return servic;
  }
}

