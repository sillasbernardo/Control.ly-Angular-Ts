import { Component, OnInit } from '@angular/core';
import { faArrowUpWideShort, faArrowDownWideShort, faPrint, faBoxesStacked, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faOpen = faArrowUpWideShort
  faClosed = faArrowDownWideShort
  faPrinters = faPrint
  faInventory = faBoxesStacked
  faUsers = faUsers

  constructor() { }

  ngOnInit(): void {
  }

}
