import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Hero, Projects, Skills, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
