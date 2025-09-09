import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [BindingComponent],
})
export class AppComponent {
  title = 'dataBinding';
}
