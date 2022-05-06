import { Component, HostListener } from "@angular/core";

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
    editUser = false;

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

    getUserDetails: {name: string, ldap: string, department: string}[] = [
        {"name": "", "ldap": "", "department": ""}
    ];  

    // Iterate over users and catch the user whose attribute name 
    //is equal to the attribute passed to function
    onEditUser(name: String){
        this.users.forEach((element) => {
            if (name === element.name){
                this.getUserDetails.map(item => {
                    item.name = element.name;
                    item.ldap = element.ldap;
                    item.department = element.department;
                })
                this.editUser = !this.editUser;
                
            }
        })
    }
    
    onCloseEditUser(){
        this.editUser = false;
    }

    onNewUser(){
        this.newUser = !this.newUser;
    }

    onCloseNewUser(){
        this.newUser = false;
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent){
        this.onCloseNewUser();
    }
}