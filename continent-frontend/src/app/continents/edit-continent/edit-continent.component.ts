import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentsService } from '../continents.service';
import { CreateOrUpdaeContinent } from '../create-or-updae-continent';

@Component({
  selector: 'app-edit-continent',
  templateUrl: './edit-continent.component.html',
  styleUrls: ['./edit-continent.component.scss']
})
export class EditContinentComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private continentService:ContinentsService,
    private router:Router) { }

  itemId:string = '';

  contients: CreateOrUpdaeContinent = {
    code: '',
    name: '',
    image: '',

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id') ?? "";
      this.getById();
    })
  }

  getById(){

    this.continentService.getById(this.itemId).subscribe((data)=>{

      this.contients.code = data.code;
      this.contients.name = data.name;
      this.contients.image = data.image;
    })
  }


  update(){

    this.continentService.update(this.itemId, this.contients)
    .subscribe(()=>{
      this.router.navigate(["/"]);
    })
  }

}
