import { Component } from '@angular/core';
import { of, tap } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToolsDemo';
  constructor() {
    new DatePipe('').transform('', '');
    of().pipe(tap(c => c)).subscribe();
  }
}
