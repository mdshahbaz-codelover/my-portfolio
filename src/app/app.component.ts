import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  showCover = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // ✅ Technical Skills (Grouped properly from resume)
  skills: string[] = [
    'Angular (v12–v18)',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Angular Material',
    'RxJS',
    'NgRx',
    'REST APIs',
    '.NET 6/8',
    'ASP.NET Core',
    'Entity Framework',
    'SQL Server',
    'Oracle',
    'PostgreSQL',
    'Azure',
    'AWS',
    'Firebase',
    'Git',
    'Nx',
    'Agile / Scrum'
  ];

  // ✅ Projects aligned with resume
  projects = [
    {
      title: 'SureOps – Subscription & Billing Management Platform',
      details: [
        'Built scalable Angular 18 SPA with responsive UI using Bootstrap & SCSS.',
        'Developed RESTful APIs using .NET 8 with full CRUD operations.',
        'Integrated SQL & PostgreSQL databases for secure data handling.',
        'Improved performance by 40% using lazy loading & code splitting.'
      ]
    },
    {
      title: 'Selfcare Portal – Employee & Project Management',
      details: [
        'Designed responsive Angular 14 UI with reusable components.',
        'Implemented REST APIs with authentication & authorization.',
        'Achieved 90% unit test coverage using Jasmine & Karma.'
      ]
    }
  ];

  submit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Form Data:', this.contactForm.value);

    alert('Thank you! I will get back to you soon.');

    this.contactForm.reset();
    this.submitted = false;
  }

  toggleCover() {
    this.showCover = !this.showCover;
  }
  // Optional: Easy access getter for validation in HTML
  get f() {
    return this.contactForm.controls;
  }
}
