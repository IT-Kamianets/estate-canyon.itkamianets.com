import { Injectable, signal, effect } from '@angular/core';

export type Language = 'uk' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>(
    (localStorage.getItem('lang') as Language) || 'uk'
  );

  constructor() {
    effect(() => {
      localStorage.setItem('lang', this.currentLang());
    });
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }

  t(key: string): string {
    const lang = this.currentLang();
    return translations[lang][key] || key;
  }
}

export const translations: Record<Language, Record<string, string>> = {
  uk: {
    'nav.home': `Головна`,
    'nav.rooms': `Номери`,
    'nav.contact': `Контакти`,
    'nav.book': `ЗАМОВИТИ`,
    'hero.title': `Садиба "Каньйон"`,
    'hero.subtitle': `Ваш затишний куточок у Кам'янці-Подільському`,
    'hero.cta': `Обрати номер`,
    'home.about.title': `Відпочинок з видом на історію`,
    'home.about.p1': `Садиба «Каньйон» розташована в самому серці історичного міста, лише за 15 хвилин неспішної прогулянки від легендарної Старої Фортеці.`,
    'home.about.p2': `Ми пропонуємо нашим гостям комфортабельні номери, виконані в теплому дерев'яному стилі, безкоштовну приватну парковку та зону для барбекю.`,
    'home.gallery.title': `Галерея садиби`,
    'rooms.title': `Наші номери`,
    'rooms.double': `Двохмісний номер`,
    'rooms.classic': `Класичний чотиримісний`,
    'rooms.standard': `Стандартний чотиримісний`,
    'rooms.balcony': `Чотиримісний з балконом`,
    'rooms.dorm': `Десятимісний загальний`,
    'rooms.details.size': `м²`,
    'rooms.details.bed1': `1 двоспальне ліжко`,
    'rooms.details.beds2': `2 двоспальні ліжка`,
    'rooms.details.beds3': `2 одинарні + 1 двоспальне`,
    'rooms.details.beds4': `2 одинарні + 4 двоспальні`,
    'rooms.features.balcony': `Балкон`,
    'rooms.features.fridge': `Холодильник`,
    'rooms.features.kettle': `Чайник`,
    'rooms.features.tv': `Телевізор`,
    'rooms.features.shower': `Душ`,
    'rooms.features.towels': `Рушники`,
    'rooms.features.city_view': `Вид на місто`,
    'rooms.features.bbq': `BBQ`,
    'rooms.features.wardrobe': `Гардероб`,
    'rooms.features.bath': `Ванна`,
    'rooms.features.iron': `Праска`,
    'rooms.features.cosmetics': `Косметика`,
    'rooms.features.big_balcony': `Великий балкон`,
    'rooms.features.canyon_view': `Вид на каньйон`,
    'rooms.features.sat_tv': `Супутникове ТБ`,
    'rooms.features.mosquito': `Москітна сітка`,
    'rooms.features.heating': `Опалення`,
    'rooms.features.terrace': `Тераса`,
    'contact.title': `Контакти`,
    'contact.info.title': `Наші дані`,
    'contact.address.label': `Адреса:`,
    'contact.address.value': `вул. Річна, 67, м. Кам'янець-Подільський, Україна`,
    'contact.phone.label': `Телефон:`,
    'contact.hours.label': `Графік роботи:`,
    'contact.hours.value': `Працюємо цілодобово, 24/7`,
    'contact.info.note': `Знаходимося в 15 хвилинах від Старої Фортеці.`,
    'footer.copy': `Всі права захищені.`,
    'footer.city': `Кам'янець-Подільський, Україна`
  },
  en: {
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.contact': 'Contact',
    'nav.book': 'BOOK NOW',
    'hero.title': 'Canyon Manor',
    'hero.subtitle': 'Your cozy corner in Kamianets-Podilskyi',
    'hero.cta': 'Choose a room',
    'home.about.title': 'Relaxation with a View of History',
    'home.about.p1': 'Canyon Manor is located in the heart of the historic city, just a 15-minute leisurely walk from the legendary Old Fortress.',
    'home.about.p2': 'We offer our guests comfortable rooms decorated in a warm wooden style, free private parking, and a BBQ area.',
    'home.gallery.title': 'Manor Gallery',
    'rooms.title': 'Our Rooms',
    'rooms.double': 'Double Room',
    'rooms.classic': 'Classic Quadruple Room',
    'rooms.standard': 'Standard Quadruple Room',
    'rooms.balcony': 'Quadruple Room with Balcony',
    'rooms.dorm': 'Ten-bed Mixed Dormitory',
    'rooms.details.size': 'm²',
    'rooms.details.bed1': '1 double bed',
    'rooms.details.beds2': '2 double beds',
    'rooms.details.beds3': '2 single + 1 double',
    'rooms.details.beds4': '2 single + 4 double',
    'rooms.features.balcony': 'Balcony',
    'rooms.features.fridge': 'Fridge',
    'rooms.features.kettle': 'Kettle',
    'rooms.features.tv': 'TV',
    'rooms.features.shower': 'Shower',
    'rooms.features.towels': 'Towels',
    'rooms.features.city_view': 'City view',
    'rooms.features.bbq': 'BBQ',
    'rooms.features.wardrobe': 'Wardrobe',
    'rooms.features.bath': 'Bath',
    'rooms.features.iron': 'Iron',
    'rooms.features.cosmetics': 'Cosmetics',
    'rooms.features.big_balcony': 'Large balcony',
    'rooms.features.canyon_view': 'Canyon view',
    'rooms.features.sat_tv': 'Satellite TV',
    'rooms.features.mosquito': 'Mosquito net',
    'rooms.features.heating': 'Heating',
    'rooms.features.terrace': 'Terrace',
    'contact.title': 'Contacts',
    'contact.info.title': 'Our Details',
    'contact.address.label': 'Address:',
    'contact.address.value': '67 Richna St, Kamianets-Podilskyi, Ukraine',
    'contact.phone.label': 'Phone:',
    'contact.hours.label': 'Opening hours:',
    'contact.hours.value': 'Open 24/7',
    'contact.info.note': 'Located 15 minutes from the Old Fortress.',
    'footer.copy': 'All rights reserved.',
    'footer.city': 'Kamianets-Podilskyi, Ukraine'
  }
};
