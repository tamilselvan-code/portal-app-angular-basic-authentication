import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.username.length > 0) {
      //Todo: load data from server
    } else {
      this.router.navigate(['/login']);
    }
  }

}
