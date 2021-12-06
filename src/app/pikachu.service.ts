import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PikachuService {

pokemon:any[] = [];

  constructor(private _http: HttpClient) {
    this.fetchPokemon();
   }
   fetchPokemon(): void{
    this._http.get("https://pokeapi.co/api/v2/pokemon/25")
    .subscribe((data:any) =>{
      this.pokemon = data;
      console.log(data.species.name);
      console.log("DATA", this.pokemon);

      console.log("Pikachu abilities : "+ data.abilities[0].ability.name + " and " + data.abilities[1].ability.name)
    });
  }
}

