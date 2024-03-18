import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from '../pages/components/about/about.component';
import { SevicesComponent } from '../pages/components/sevices/sevices.component';
import { FeaturesComponent } from '../pages/components/features/features.component';
import { TeamComponent } from "../pages/components/team/team.component";
import { TestimonialsComponent } from "../pages/components/testimonials/testimonials.component";
import { ContactUsComponent } from "../pages/components/contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    SevicesComponent,
    FeaturesComponent,
    TeamComponent,
    TestimonialsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  handleMode() {
    document.documentElement.classList.toggle("dark");
  };
}
