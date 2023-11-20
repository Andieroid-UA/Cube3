import { Component, OnInit } from '@angular/core';

declare const bootstrap: any; // Declare Bootstrap variable

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize the carousel when the component loads
    this.initCarousel();
  }

  initCarousel() {
    // Initialize the carousel using Bootstrap's JavaScript
    const myCarouselElement = document.getElementById('myCarousel');
    const myCarousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 3000, // Set the interval for auto-sliding (in milliseconds), if needed
      // Other options if required
    });
  }

  // Function to go to the next slide
  goToNextSlide() {
    console.log('goToNextSlide');
    const myCarouselElement = document.getElementById('myCarousel');
    const myCarousel = bootstrap.Carousel.getInstance(myCarouselElement);
    if (myCarousel) {
      myCarousel.next();
    }
  }

  // Function to go to the previous slide
  goToPreviousSlide() {
    const myCarouselElement = document.getElementById('myCarousel');
    const myCarousel = bootstrap.Carousel.getInstance(myCarouselElement);
    if (myCarousel) {
      myCarousel.prev();
    }
  }
}
