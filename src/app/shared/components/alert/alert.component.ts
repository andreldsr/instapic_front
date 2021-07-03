import { AlertService } from './alert.service';
import { Component, OnInit, Input } from '@angular/core';
import { Alert } from './alert';

@Component({
  selector: 'ol-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() time: number = 3000;
  alerts: Alert[] = [];
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), this.time)
      })
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(a => a != alert);
  }

}
