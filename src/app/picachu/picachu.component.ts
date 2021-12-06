import { Component, OnInit } from '@angular/core';
import { PikachuService } from '../pikachu.service';

@Component({
  selector: 'app-picachu',
  templateUrl: './picachu.component.html',
  styleUrls: ['./picachu.component.css']
})
export class PicachuComponent implements OnInit {

  constructor(private _httpService: PikachuService) { }

  ngOnInit(): void {
  }

}
