import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private dbservice:DbserviceService) { }
  public dataarray:any[]=[];

  ngOnInit(): void {
    this.dbservice.viewdatas().then((data:any)=>{
      this.dataarray=data;
    })
  }

}
