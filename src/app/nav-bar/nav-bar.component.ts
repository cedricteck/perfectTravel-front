import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router,) { }

  @Input()
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/'])
  }
}
