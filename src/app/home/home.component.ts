import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }

  sampleFormGroup=this.fb.group({
    Name:[''],
    Email:[''],
    Password:['']
  })
  ngOnInit(): void {
  }
 get fcontrols(){
   return this.sampleFormGroup.controls;
 }
 onsubmit(){
   console.log(this.sampleFormGroup.value)
   this.dbservice.senddata(this.sampleFormGroup.value).then((confirmation:any)=>
   {console.log(confirmation);
  if(confirmation.alert==="Sucess"){
    alert('Inserted')
  }})
 }
}
