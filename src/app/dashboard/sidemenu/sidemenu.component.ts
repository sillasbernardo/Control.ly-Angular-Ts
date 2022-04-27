import { Component, OnInit} from "@angular/core";
import { tick } from "@angular/core/testing";

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

    // Menu switcher
    isHomeUp = true;
    isTicketUp = false;
    isPrinterUp = false;
    isInventoryUp = false;
    isUsersUp = false;
    isNotificationsUp = false;

    arrowStatus: boolean = false; // Toggle arrow right or down in account section
    accountOptions: boolean = false; // Show or hide account options

    constructor(){}

    ngOnInit(): void {
        
    }

    onMenuSchema(home:boolean, tickets:boolean, printers:boolean, inventory:boolean, users:boolean, notifications:boolean){
        this.isHomeUp = home;
        this.isTicketUp = tickets;
        this.isPrinterUp = printers;
        this.isInventoryUp = inventory;
        this.isUsersUp = users;
        this.isNotificationsUp = notifications;
    }

    onMenuClick(data:number){
        switch(data){
            case 1: // Home
                this.onMenuSchema(true, false, false, false, false, false);
                break;

            case 2: // Chamados
                this.onMenuSchema(false, true, false, false, false, false);
                break;

            case 3: // Impressoras
                this.onMenuSchema(false, false, true, false, false, false);
                break;

            case 4: // Inventário
                this.onMenuSchema(false, false, false, true, false, false);
                break;

            case 5: // Usuários
                this.onMenuSchema(false, false, false, false, true, false);
                break;

            case 6: // Notificações
                this.onMenuSchema(false, false, false, false, false, true);
                break; 
                
            default:
                console.log('Could not find element for ')
            
        }
    }

    arrowIsClicked(){
        this.arrowStatus = !this.arrowStatus;
        this.accountOptions = !this.accountOptions;
    }
}