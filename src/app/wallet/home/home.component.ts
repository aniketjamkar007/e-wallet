import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-wallet-home',
  imports: [ CommonModule,MatCardModule, MatButtonModule, MatIconModule, MatListModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  transactions = [
    { amount: 500, label: 'Received from Raj', date: 'Today', icon: 'arrow_downward', iconColor: 'green' },
    { amount: 200, label: 'Sent to Zomato', date: 'Yesterday', icon: 'arrow_upward', iconColor: 'red' },
    { amount: 1000, label: 'Added via UPI', date: 'Jun 15', icon: 'arrow_forward', iconColor: 'yellow' },
    { amount: 350, label: 'Sent to Swiggy', date: 'Jun 14', icon: 'arrow_back', iconColor: 'red' }
  ];
}
