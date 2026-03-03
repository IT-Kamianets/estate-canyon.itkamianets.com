import { Component, inject } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected tService = inject(TranslationService);

  setLang(lang: Language) {
    this.tService.setLanguage(lang);
  }

  isLang(lang: Language) {
    return this.tService.currentLang() === lang;
  }
}
