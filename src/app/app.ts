import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);
  private tService = inject(TranslationService);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitleAndMeta();
    });
  }

  private updateTitleAndMeta() {
    const url = this.router.url;
    let title = 'Садиба "Каньйон" - Кам\'янець-Подільський';
    let description = 'Садиба "Каньйон" у Кам\'янці-Подільському — затишний відпочинок у самому серці історичного міста. Комфортні номери, зона барбекю та вид на каньйон.';

    if (url.includes('rooms')) {
      title = `Номери - ${title}`;
      description = 'Оберіть свій ідеальний номер у садибі "Каньйон". Двомісні та чотиримісні номери з усіма зручностями та видом на каньйон.';
    } else if (url.includes('contact')) {
      title = `Контакти - ${title}`;
      description = 'Наші контакти, адреса та карта проїзду. Знаходимося в 15 хвилинах від Старої Фортеці у Кам\'янці-Подільському.';
    }

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
  }
}
