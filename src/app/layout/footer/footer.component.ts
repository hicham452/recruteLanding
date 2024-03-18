import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  // Add a property to track whether the "back to top" button should be displayed
  isShow: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShow = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > 100;
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
