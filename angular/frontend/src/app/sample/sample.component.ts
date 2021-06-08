import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  info = {title:"", description:""};
  title = 'frontend';
  itemSet;
  name ="";
  item= "";
  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.itemSet = this.commonService.getAll();
  }

  submitItem(){
    console.log("done")
    if(this.commonService.addItem(this.item)){
      alert("item already exists")
    }
    this.commonService.addItem(this.item);
    this.itemSet = this.commonService.getAll();
    this.item = "";
  }
  delete(item){
    this.commonService.deleteItem(item);
  }

}
