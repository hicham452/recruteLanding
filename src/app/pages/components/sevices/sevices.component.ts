import { Component } from '@angular/core';

@Component({
  selector: 'app-sevices',
  standalone: true,
  imports: [],
  templateUrl: './sevices.component.html',
  styleUrl: './sevices.component.css'
})
export class SevicesComponent {
  items = [
    {
      id: 1,
      icon: "mdi mdi-chart-pie text-4xl",
      title: "Product Management",
    },
    {
      id: 2,
      icon: "mdi mdi-arrange-send-backward text-4xl",
      title: "Design & Development",
    },
    {
      id: 3,
      icon: "mdi mdi-laptop text-4xl",
      title: "Web & Mobile App Design",
    },
    {
      id: 4,
      icon: "mdi mdi-diamond text-4xl",
      title: "Design & Vrestives",
    },
    {
      id: 5,
      icon: "mdi mdi-chart-bar text-4xl",
      title: "Digital Marketing",
    },
    {
      id: 6,
      icon: "mdi mdi-view-grid text-4xl",
      title: "Business Development",
    },
  ];
}
