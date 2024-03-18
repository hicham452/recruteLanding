import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMender = [
    {
        id: 1,
        img: "assets/images/avatar/img-1.png",
        name: "Lena J. Gracey"
    },
    {
        id: 2,
        img: "assets/images/avatar/img-2.png",
        name: "Lenny Morton"
    },
    {
        id: 3,
        img: "assets/images/avatar/img-3.png",
        name: "Jessica Parker"
    },
    {
        id: 4,
        img: "assets/images/avatar/img-4.png",
        name: "Andrew K. Allen"
    },
];
}
