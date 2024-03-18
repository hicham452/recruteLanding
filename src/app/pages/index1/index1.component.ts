import { Component } from '@angular/core';
import { ClientComponent } from "../components/client/client.component";

@Component({
  selector: 'app-index1',
  standalone: true,
  imports: [ClientComponent],
  templateUrl: './index1.component.html',
  styleUrl: './index1.component.css'
})
export class Index1Component {

}
