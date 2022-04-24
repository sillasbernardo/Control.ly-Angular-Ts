import { Component, OnInit} from "@angular/core";

import { faHome, faClipboardList, faPrint, faBoxesStacked, faUsers, faUser, faGear, faRightFromBracket, faBell, faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-sidemenu',           
    templateUrl: "./sidemenu.component.html",
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit{
    faHome = faHome;
    faTicket = faClipboardList;
    faPrinter = faPrint;
    faInventory = faBoxesStacked;
    faEmployees = faUsers;
    faProfile = faUser;
    faSetting = faGear;
    faExit = faRightFromBracket;
    faAlert = faBell;
    faArrowRight = faAngleRight;
    faArrowDown = faAngleDown;

    arrowStatus: boolean = false; // Toggle arrow right or down in account section
    accountOptions: boolean = false; // Show or hide account options

    constructor(){}

    ngOnInit(): void {}

    arrowIsClicked(){
        this.arrowStatus = !this.arrowStatus;
        this.accountOptions = !this.accountOptions;
    }
}