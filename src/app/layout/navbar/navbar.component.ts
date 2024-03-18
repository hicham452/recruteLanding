import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, el: ElementRef, @Inject(DOCUMENT) private document: Document,) { }
  direction: string = 'ltr';


  ngOnInit(): void {
    this.renderer.setAttribute(this.document.documentElement, 'dir', 'ltr');
    
  }

  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.detectActiveSection();
  }

  detectActiveSection() {
    const sections = ['home', 'about', 'services', 'features', 'team', 'testimonials', 'contact'];
    let activeSection = 'home';
    const scrollPosition = window.scrollY || window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      const currentSection = document.getElementById(sections[i]);
      if (currentSection) {
        const sectionTop = currentSection.offsetTop - 50; // Adjust this value according to your layout
        const sectionBottom = sectionTop + currentSection.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeSection = sections[i];
          break;
        }
      }
    }

    this.activeSection = activeSection;
  }

  toggleDirection() {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('dir') === 'ltr') {
      this.renderer.setAttribute(htmlElement, 'dir', 'rtl');
    } else {
      this.renderer.setAttribute(htmlElement, 'dir', 'ltr');
    }
  }

  //Mobile screen
  handleMobileMenu() {
    const navBarId = document.getElementById('navbarNav');
    navBarId?.classList.toggle('hidden');
  }
}
