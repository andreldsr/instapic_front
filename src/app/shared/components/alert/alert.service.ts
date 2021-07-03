import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

    keepAfterNavigate = false;
    alertSubject: Subject<Alert> = new Subject<Alert>();
    constructor(router: Router) {
        router.events.subscribe(
            event => {
                if (event instanceof NavigationStart) {
                    if (this.keepAfterNavigate) {
                        this.keepAfterNavigate = false;
                    } else {
                        this.clear();
                    }
                }
            })
    }

    info(message: string, keepAfterNavigate = false) {
        this.alert(AlertType.INFO, message, keepAfterNavigate)
    }

    success(message: string, keepAfterNavigate = false) {
        this.alert(AlertType.SUCCESS, message, keepAfterNavigate)
    }

    warning(message: string, keepAfterNavigate = false) {
        this.alert(AlertType.WARNING, message, keepAfterNavigate)
    }

    danger(message: string, keepAfterNavigate = false) {
        this.alert(AlertType.DANGER, message, keepAfterNavigate)
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }

    private alert(alertType: AlertType, message: string, keepAfterNavigate = false) {
        this.keepAfterNavigate = keepAfterNavigate;
        this.alertSubject.next(new Alert(alertType, message));
    }

    clear() {
        this.alertSubject.next(null);
    }

}