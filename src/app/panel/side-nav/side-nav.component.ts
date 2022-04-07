import { Component, OnInit } from '@angular/core';
import { faHome, faClipboardList, faPrint, faBoxesStacked, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

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

  username = "Sillas Bernardo"


  constructor() { }

  ngOnInit(): void {
  }

}
