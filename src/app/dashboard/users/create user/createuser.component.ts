import { Component, Output, EventEmitter } from "@angular/core";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
    'selector': 'app-createuser',
    templateUrl: './createuser.component.html',
    styleUrls: ['./createuser.component.scss']
})

export class CreateUserComponent{

    faCloseNewUser = faCircleXmark;

    @Output("onCloseNewUser") onCloseNewUser: EventEmitter<any> = new EventEmitter();

    onClose()
    {
        this.onCloseNewUser.emit();
    }

}