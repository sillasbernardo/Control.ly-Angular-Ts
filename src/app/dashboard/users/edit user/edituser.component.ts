import { Component, Output, EventEmitter } from "@angular/core";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.scss']
})

export class EditUserComponent{

    faCloseEditUser = faCircleXmark;

    @Output("onCloseEditUser") onCloseEditUser: EventEmitter<any> = new EventEmitter();

    onClose(){
        this.onCloseEditUser.emit();
    }

}