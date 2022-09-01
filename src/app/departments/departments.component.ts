import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: any = [];
  constructor(private dataService: DataService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.authenticationService.username.length > 0) {
      this.dataService.getDepartments().subscribe((data: {}) => {
        console.log(data);
        this.departments = data;
      })
    } else {
      this.router.navigate(['/login']);
    }
  }

}
