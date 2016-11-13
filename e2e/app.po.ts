import { browser, element, by } from 'protractor';

export class PairFXWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar div md-toolbar-row span h1')).getText();
  }
}
