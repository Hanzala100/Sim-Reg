import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonIcon, FormsModule, RouterModule, RouterLink]
})
export class LandingPagePage implements OnInit, OnDestroy {
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;

  isMobileMenuOpen = false;

  currentSlide = 0;
  totalSlides = 3;
  carouselInterval: any;

  plans = [
    {
      title: 'Unlimited Everything 🚀',
      description: 'Experience unlimited calls, SMS, and high-speed data with our premium plan.',
      price: '₹599/month',
      gradient: 'from-red-500 to-pink-600',
      buttonColor: 'text-red-500',
      image: '../../../assets/images/plan1.svg'
    },
    {
      title: 'Smart Family 👨‍👩‍👧‍👦',
      description: 'Perfect for families with shared data, multiple connections, and parental controls.',
      price: '₹999/month',
      gradient: 'from-blue-500 to-cyan-600',
      buttonColor: 'text-blue-500',
      image: '../../../assets/images/plan2.svg'

    },
    {
      title: 'Business Pro 💼',
      description: 'Enterprise-grade connectivity with priority support and advanced features.',
      price: '₹1299/month',
      gradient: 'from-green-500 to-emerald-600',
      buttonColor: 'text-green-500',
      image: '../../../assets/images/plan3.svg'

    }
  ];

  // Services data
  services = [
    {
      title: '5G Network',
      description: 'Experience blazing-fast internet speeds with our next-generation 5G network coverage.',
      icon: 'cellular',
      gradient: 'from-red-400 to-pink-500',
      image: 'assets/demo.png'
    },
    {
      title: 'Fiber Broadband',
      description: 'High-speed fiber optic internet for your home and business needs.',
      icon: 'wifi',
      gradient: 'from-blue-400 to-cyan-500',
      image: 'assets/demo.png'
    },
    {
      title: 'Digital TV',
      description: 'Premium entertainment with HD channels and streaming services.',
      icon: 'tv',
      gradient: 'from-green-400 to-emerald-500',
      image: 'assets/demo.png'
    },
    {
      title: 'Digital Payments',
      description: 'Secure and convenient digital payment solutions for everyday transactions.',
      icon: 'card',
      gradient: 'from-yellow-400 to-orange-500',
      image: 'assets/demo.png'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for storage, computing, and business applications.',
      icon: 'cloud',
      gradient: 'from-purple-400 to-violet-500',
      image: 'assets/demo.png'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.',
      icon: 'headset',
      gradient: 'from-pink-400 to-rose-500',
      image: 'assets/demo.png'
    }
  ];

  // Features data
  features = [
    {
      title: 'Lightning Fast Speed',
      description: 'Experience speeds up to 1Gbps with our advanced network infrastructure and cutting-edge technology.',
      icon: 'flash',
      gradient: 'from-red-400 to-pink-500',
      delay: '0s'
    },
    {
      title: 'Secure & Reliable',
      description: 'Bank-level security protocols and 99.9% uptime guarantee ensure your connectivity is always protected.',
      icon: 'shield-checkmark',
      gradient: 'from-blue-400 to-cyan-500',
      delay: '0.2s'
    },
    {
      title: 'Expert Support',
      description: 'Our dedicated team of experts is available 24/7 to assist you with any queries or technical issues.',
      icon: 'people',
      gradient: 'from-green-400 to-emerald-500',
      delay: '0.4s'
    },
    {
      title: 'Future-Ready',
      description: 'Stay ahead with our continuous network upgrades and adoption of emerging technologies like IoT and AI.',
      icon: 'trending-up',
      gradient: 'from-purple-400 to-violet-500',
      delay: '0.6s'
    }
  ];

  // Testimonials data
  testimonials = [
    {
      name: 'Priya Sharma',
      review: "Airtel's 5G network has transformed my work-from-home experience. The speed is incredible and the connection never drops!",
      image: 'assets/demo.png',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      review: "The customer service is outstanding! They resolved my issue within minutes. Truly impressed with their professionalism.",
      image: 'assets/demo.png',
      rating: 5
    },
    {
      name: 'Anita Patel',
      review: "Best value for money! The unlimited data plan has saved me so much, and the network coverage is excellent everywhere.",
      image: 'assets/demo.png',
      rating: 5
    }
  ];

  // Contact form data
  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.startCarousel();
    this.setupScrollEffects();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  // Navigation methods
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string) {
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  navigateToHome() {
    this.scrollToSection('home');
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  getCarouselTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.contactForm);
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.firstName &&
      this.contactForm.lastName &&
      this.contactForm.email &&
      this.contactForm.phone &&
      this.contactForm.message
    );
  }

  resetForm() {
    this.contactForm = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  generateStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  private setupScrollEffects() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      }
    });
  }

  private setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        htmlCard.style.opacity = '0';
        htmlCard.style.transform = 'translateY(30px)';
        htmlCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });
    }, 100);
  }
}
