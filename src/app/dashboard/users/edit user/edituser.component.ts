import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.scss']
})

export class EditUserComponent implements OnInit{

    faCloseEditUser = faCircleXmark;
    inputElementName:string = "hello";
    inputElementLdap:string;
    inputElementDepartment:string;

    // Send event to close Edit User modal
    @Output("onCloseEditUser") onCloseEditUser: EventEmitter<any> = new EventEmitter();

    // Receive the values from getUserDetails, from users component
    @Input() useUserDetails: {name:string, ldap:string, department:string} = {"name": "", "ldap": "", "department": ""};
 
    onClose(){
        this.onCloseEditUser.emit();
    }

    ngOnInit(){}
}