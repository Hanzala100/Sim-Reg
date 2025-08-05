import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ToastContainerComponent } from './shared/toast-container/toast-container.component';

import { userService } from './services/user.service';
import { PersistenceService } from './services/persistence.service';
import { ToastService } from './services/toast.service';
import { TokenStateService } from './services/tokenState.service';
import { GlobalProvider } from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, LoadingSpinnerComponent, ToastContainerComponent],
})
export class AppComponent {
  tridentToken!: string;
  isLoading: boolean = false;

  constructor(
    private UserService: userService,
    private persistenceService: PersistenceService,
    private platform: Platform,
    private toastService: ToastService,
    private tokenStateService: TokenStateService,
    private g: GlobalProvider
  ) { }

  async ngOnInit() {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      this.tridentToken = token;
      this.initializeApp();
    } else {
      this.toastService.show('Please login from Tridentity App', 10000, 'error');
    }
  }

  async initializeApp() {
    this.isLoading = true;
    await this.platform.ready();

    try {
      const { accessToken, customerId } = await this.UserService.authenticateUser(this.tridentToken);

      if (accessToken) {
        await this.persistenceService.set('access_token', accessToken);
        await this.persistenceService.set('customer_id', customerId);
        this.g.customerId = customerId;
        this.tokenStateService.notifyTokenReady();
      } else {
        this.toastService.show('Please login from Tridentity App', 10000, 'error');
      }
    } catch (error) {
      this.toastService.show('Authentication failed. Please try again.', 8000, 'error');
      console.error('Auth error:', error);
    } finally {
      this.isLoading = false;
    }
  }

}