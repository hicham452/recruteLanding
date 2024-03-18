import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-layout-three',
  standalone: true,
  imports: [
    CountUpModule
  ],
  templateUrl: './layout-three.component.html',
  styleUrl: './layout-three.component.scss'
})
export class LayoutThreeComponent {

}
