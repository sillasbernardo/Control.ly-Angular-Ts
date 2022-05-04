import { Component, OnInit } from "@angular/core";

import { faPenToSquare, faUser, faUserXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent{

    faEditUser = faPenToSquare;
    faDeleteUser = faUserXmark;

    users = [
        {
            id: 1,
            name: "Sillas Bernardo",
            ldap: "sillas.bernardo",
            department: "Coordenador I"
        },
        {
            id: 2,
            name: "Kenji Chikui",
            ldap: "kenji.chikui",
            department: "Estagiário"
        },
        {
            id: 3,
            name: "João Vitor",
            ldap: "joao.vitor",
            department: "Estagiário"
        }
    ];
}