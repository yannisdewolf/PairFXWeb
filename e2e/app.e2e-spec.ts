import { PairFXWebPage } from './app.po';

describe('pair-fxweb App', function() {
  let page: PairFXWebPage;

  beforeEach(() => {
    page = new PairFXWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works a little bit!');
  });
});
