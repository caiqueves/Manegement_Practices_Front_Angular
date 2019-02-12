import { EventEmitter } from "@angular/core";

export class WaitService {
    notifier = new EventEmitter<any>()

    notify(show: boolean){
        this.notifier.emit(show)
    }
}