import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from "./hero";
import { HEROES} from "./mock-heroes";
import  { MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageSerice: MessageService
  ) { }

  private log(message: string) {
    this.messageSerice.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.messageSerice.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageSerice.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
