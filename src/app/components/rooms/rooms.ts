import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TranslationService } from '../../services/translation.service';

register();

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class RoomsComponent {
  protected tService = inject(TranslationService);
}
