import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Userstbl } from 'src/app/models/Userreg.model';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  userstbls:Userstbl=new Userstbl();
 
  UserRegister() {
    var addData = {

      firstname:this.userstbls.firstname,
      lastname:this.userstbls.lastname,
      email:this.userstbls.email,
      password:this.userstbls.password,
      Cpassword:this.userstbls.Cpassword,
      contactnumber:this.userstbls.contactnumber
      
    }
    console.log(addData);
    console.log(this.userstbls);
    this.http.post("https://localhost:44346/api/Register/registration", addData)
    .subscribe(res => {console.log(res)});
    this.userstbls= new Userstbl();
  
  }


}
