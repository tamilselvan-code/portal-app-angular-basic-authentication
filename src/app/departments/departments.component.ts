import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: any = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getDepartments().subscribe((data: {})=>{
      console.log(data);
      this.departments = data;
    })  
  }

}
