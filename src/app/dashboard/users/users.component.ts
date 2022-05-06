import { Component } from "@angular/core";

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

    newUser = false;

    users = [
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Nome Sobrenome",
            ldap: "nome.sobrenome",
            department: "Setor"
        }
    ];

    onNewUser(){
        this.newUser = !this.newUser;
    }
}