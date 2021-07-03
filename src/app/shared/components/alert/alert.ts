export class Alert {
    constructor(readonly alertType: AlertType, readonly message: string) { }
}

export enum AlertType {
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info'
}