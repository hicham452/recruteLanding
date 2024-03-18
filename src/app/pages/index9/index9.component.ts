import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ClientComponent } from "../components/client/client.component";

@Component({
  selector: 'app-index9',
  standalone: true,
  imports: [SlickCarouselModule, ClientComponent],
  templateUrl: './index9.component.html',
  styleUrl: './index9.component.css'
})
export class Index9Component {
  slideConfig = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
}
