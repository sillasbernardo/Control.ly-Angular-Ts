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

    newUser = false; // Triggers New User modal
    editUser = false; // Triggers Edit User modal

    // List of users (will be reworked)
    users = [
        {
            name: "Martino Vladimir",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Mike Douglas",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
        {
            name: "Caitlyn Nouis",
            ldap: "nome.sobrenome",
            department: "Setor"
        },
    ];

    // Send values to useUserDetails, in editUser component
    getUserDetails: {name: string, ldap: string, department: string} = 
        {"name": "test", "ldap": "", "department": ""};

    // Iterate over users and catch the user whose attribute name 
    //is equal to the attribute passed to function
    onEditUser(name: String){
        this.users.forEach((element) => {
            if (name === element.name){
                this.getUserDetails.name = element.name;
                this.getUserDetails.ldap = element.ldap;
                this.getUserDetails.department = element.department;
                this.editUser = true;     

            }
        })
    }
    
    onCloseEditUser(){
        this.editUser = false;
    }


    onNewUser(){
        this.newUser = true;
    }

    onCloseNewUser(){
        this.newUser = false;
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent){
        this.onCloseNewUser();
        this.onCloseEditUser();
    }
}