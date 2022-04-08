import { Component, OnInit } from '@angular/core';
import { faHome, faClipboardList, faPrint, faBoxesStacked, faUsers, faUser, faGear, faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faHome = faHome
  faTicket = faClipboardList
  faPrinter = faPrint
  faInventory = faBoxesStacked
  faEmployees = faUsers
  faProfile = faUser
  faSetting = faGear
  faExit = faRightFromBracket
  faAlert = faBell

  username = "Nome Sobrenome"
  userRole = "Cargo"


  constructor(private router: Router) { }

  goToUrl(location: String){
    this.router.navigate([location]);
  }

  ngOnInit(): void {
  }

}
