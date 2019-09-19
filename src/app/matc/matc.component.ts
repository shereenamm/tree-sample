import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-matc',
  templateUrl: './matc.component.html',
  styleUrls: ['./matc.component.css']
})
export class MatcComponent implements OnInit {

  model: Person[];
  treeControl = new NestedTreeControl<Person>(node => this.getChildren(node) );
  dataSource = new MatTreeNestedDataSource<Person>();

  constructor(private service : AppserviceService) { }

  getChildren(node:Person): Person[]{
    return this.model.filter((p=> p.parentId==node.id));
  }

  ngOnInit() {
    this.model =[];
    this.service.getPersons().subscribe((data)=>{
      
      this.model = data as Person[];
      this.dataSource.data = this.model.filter((p=>p.parentId==null));
    });
    this.dataSource.data = this.model;
  }
  hasChild = (_: number, node: Person) => this.model.filter((p=>p.parentId===node.id)).length>0;

}


