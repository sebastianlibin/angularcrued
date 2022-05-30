import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }

  sampleFormGroup=this.fb.group({
    Password:['']
  })
  ngOnInit(): void {
  }
 get fcontrols(){
   return this.sampleFormGroup.controls;
 }
 onsubmit(){
   console.log(this.sampleFormGroup.value)
   this.dbservice.delete(this.sampleFormGroup.value).then((confirmation:any)=>
   {console.log(confirmation);
  if(confirmation.alert==="Sucess"){
    alert('Deleted')
  }})
 }
}
