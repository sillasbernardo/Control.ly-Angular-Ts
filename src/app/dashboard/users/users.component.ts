import { Component, OnInit } from "@angular/core";

import { faPenToSquare, faUserXmark, faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent{

    faEditUser = faPenToSquare;
    faDeleteUser = faUserXmark;
    faUserIcon = faCircleUser;
    faSearchIcon = faMagnifyingGlass;

    users = [
        {
            id: 1,
            name: "Sillas Bernardo",
            ldap: "sillas.bernardo",
            department: "TI"
        },
        {
            id: 2,
            name: "Kenji Chikui",
            ldap: "kenji.chikui",
            department: "TI"
        },
        {
            id: 3,
            name: "João Vitor",
            ldap: "joao.vitor",
            department: "TI"
        }
    ];
}