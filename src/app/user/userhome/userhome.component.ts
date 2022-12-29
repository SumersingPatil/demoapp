import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Productstbl } from 'src/app/models/manageproduct.model';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.ShowData();
    
  }

  ShowData()
  {
    console.log("hi");
    this.http.get("https://www.aspiresoft.co.ke/Wt/APIs.aspx/getproductlisting")
  
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    
  }

  productstbls:Productstbl=new Productstbl();
 

  }  



