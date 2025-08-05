
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenStateService {
    private tokenReady = new BehaviorSubject<boolean>(false);
    tokenReady$ = this.tokenReady.asObservable();

    notifyTokenReady() {
        this.tokenReady.next(true);
    }
}
