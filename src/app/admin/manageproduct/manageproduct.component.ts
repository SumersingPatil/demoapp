
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productstbl } from 'src/app/models/manageproduct.model';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html'
  //styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.ShowData();
    
  }

  ShowData()
  {
    console.log("hi");
    this.http.get("https://www.aspiresoft.co.ke/Wt/APIs.aspx.getproductlisting")
  
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }

  productstbls:Productstbl=new Productstbl();
 
  getData: Array<Productstbl>= new Array<Productstbl>();

  AddProduct() {
    var addData = {
      id:Number(this.productstbls.id),
      productname:this.productstbls.productname,
      productdesc:this.productstbls.productdesc,
      price:this.productstbls.price,
      features:this.productstbls.features,
      isActive:this.productstbls.isActive
    }
    console.log(addData);
    console.log(this.productstbls);
    this.http.post("https://localhost:44346/api/Product/productname/add", addData)
    .subscribe(res => { this.ShowData();; console.log(res) }, res => console.log(res));
    this.productstbls= new Productstbl();
  
  }

  DeleteAirline(prod: Productstbl) {
    console.log(prod);
    let httparms = new HttpParams().set("Id", prod.id);
    let options = { params: httparms };
    this.http.delete("https://localhost:44346/api/Product/productname/delete/id", options)
    .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
    

  }


  
}
