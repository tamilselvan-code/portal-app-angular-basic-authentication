import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'portal-app-angular';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    //this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.authenticationService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  handleLogout() {
    this.authenticationService.logout();
    //this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.router.navigate(['/']);
  }
}
