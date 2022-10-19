import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContinentsService } from 'src/app/continents/continents.service';
import { CreateOrUpdaeContinent } from 'src/app/continents/create-or-updae-continent';

@Component({
  selector: 'app-add-contient',
  templateUrl: './add-contient.component.html',
  styleUrls: ['./add-contient.component.scss']
})
export class AddContientComponent implements OnInit {

  constructor(private continentService: ContinentsService,
    private router:Router) {  }

  contients:CreateOrUpdaeContinent ={
    code:'',
    name:'',
    image:'',

  }

  ngOnInit(): void {
  }

  create(){
    this.continentService.create(this.contients).subscribe(()=> {

      this.router.navigate(['/']);
    });
  }
}
