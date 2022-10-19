import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch-continent',
  templateUrl: './serch-continent.component.html',
  styleUrls: ['./serch-continent.component.scss']
})
export class SerchContinentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enterContinentSearchValue: String = "";
}
