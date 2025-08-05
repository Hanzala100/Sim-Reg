import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  imports: [CommonModule],
  inputs: ['message', 'type', 'duration'],

    animations: [
      trigger('slideInOut', [
        transition(':enter', [
          style({ transform: 'translateX(-50%) translateY(100%)', opacity: 0 }),
          animate('300ms ease-out', style({ transform: 'translateX(-50%) translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          animate('250ms ease-in', style({ transform: 'translateX(-50%) translateY(100%)', opacity: 0 }))
        ])
      ])
    ]
})
export class ToastComponent {
  constructor() {
    console.log("toast called");

  }

  @Input() message: string = '';
  @Input() type: 'error' | 'success' | 'warning' | 'info' | 'danger' = 'error';
  @Input() duration: number = 8000;
  @Output() close = new EventEmitter<void>();

  closeToast() {
    this.close.emit();
  }
}

