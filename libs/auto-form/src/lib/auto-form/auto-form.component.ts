import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AutoFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
