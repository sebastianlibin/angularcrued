import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }
  senddata(data:any){
    return this.http.post("http://127.0.0.1/Crued/send.php",data).toPromise()
  }
  viewdatas(){
    return this.http.get("http://127.0.0.1/Crued/view.php").toPromise()
  }
  update(data:any){
    return this.http.post("http://127.0.0.1/Crued/update.php",data).toPromise()
  }
  delete(data:any){
    return this.http.post("http://127.0.0.1/Crued/delete.php",data).toPromise()
  }
}
