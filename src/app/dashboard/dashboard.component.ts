import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core"
import { SidemenuComponent } from "./sidemenu/sidemenu.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit{

    @ViewChild(SidemenuComponent) sideMenuComponent: any;

    isUsersUp = false;

    constructor(){}

    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        this.isUsersUp = this.sideMenuComponent.isUsersUp;
    }
}