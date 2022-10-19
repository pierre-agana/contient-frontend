import { Component, OnInit } from '@angular/core';
import { Continents } from '../continents';
import { ContinentsService } from '../continents.service';

declare var window:any;

@Component({
  selector: 'app-all-continents',
  templateUrl: './all-continents.component.html',
  styleUrls: ['./all-continents.component.scss']
})
export class AllContinentsComponent implements OnInit {

  constructor(private continentService:ContinentsService) { }


  continentsAll:Continents[] = [];
  deletModal:any;
  itemToDelete:string ='';

  ngOnInit(): void {

    this.deletModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
 
    this.getAll();
  }


  openDeletePopup(id:any){
    this.itemToDelete = id;
    this.deletModal.show();
  }


  getAll(){
    this.continentService.get().subscribe((data)=> {

      this.continentsAll = data;
    })
  }

  delete(){

    this.continentService.delete(this.itemToDelete)
    .subscribe(()=> {
      this.continentsAll = this.continentsAll.filter(_ => _._id !== this.itemToDelete);
      this.deletModal.hide();
    })
  }

}
