import { Component } from '@angular/core';
import { of, tap } from 'rxjs';
import { DatePipe } from '@angular/common';
//import * as d from "d3";
import * as axios from 'axios';
import { scaleLinear } from 'd3-scale'

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
    //d.scaleLinear([]);
    scaleLinear([]);
  }
}
