import { Component, OnInit } from '@angular/core';
import { ColorserviceService } from "./shared/colorservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public allColorsList: any = [];
  public color: any;
  public filteredList: any = []

  constructor(public service: ColorserviceService){}

  ngOnInit(): void {
    this.getAllColors();
  }

  // Get all the colors from the JSON
  getAllColors(){
    return this.service.getColors().subscribe(data => {
      this.allColorsList = data;
    });
  }

  // Filter the color based on given in Text box
  changeColor(){
    if(this.color){
      this.filteredList = this.allColorsList.filter((obj: any) => obj.English.toLowerCase().indexOf(this.color.toLowerCase()) !== -1);
    }
    else{
      this.filteredList = [];
    }
  }
  
}
