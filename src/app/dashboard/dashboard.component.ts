import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }

  sampleFormGroup=this.fb.group({
    Name:[''],
    Email:[''],
    Password:['']
  })
  public dataarray:any[]=[];
  ngOnInit(): void {
    this.dbservice.viewdatas().then((data:any)=>{
      this.dataarray=data;
    })
  }
 get fcontrols(){
   return this.sampleFormGroup.controls;
 }
 onsubmit(){
   console.log(this.sampleFormGroup.value)
   this.dbservice.update(this.sampleFormGroup.value).then((confirmation:any)=>
   {console.log(confirmation);
  if(confirmation.alert==="Sucess"){
    alert('Inserted')
  }})
 }
}
