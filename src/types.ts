/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Page {
  HOME = 'home',
  UNFALLGUTACHTEN = 'unfallgutachten',
  SCHADENGUTACHTEN = 'schadengutachten',
  FAHRZEUGBEWERTUNG = 'fahrzeugbewertung',
  EINSATZGEBIET = 'einsatzgebiet',
  UEBER_MICH = 'ueber-mich',
  KONTAKT = 'kontakt',
  IMPRESSUM = 'impressum',
  DATENSCHUTZ = 'datenschutz'
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
