import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import { ToastData, ToastService } from 'src/app/services/toast.service';



@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent {
  toasts: ToastData[] = [];

  constructor(private toastService: ToastService) {
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });

    console.log("toast containercalled");

  }

  removeToast(id: string) {
    this.toastService.remove(id);
  }

  trackByToast(index: number, toast: ToastData): string {
    return toast.id;
  }
}