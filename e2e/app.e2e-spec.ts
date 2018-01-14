import { StorexPage } from './app.po';

describe('storex App', function() {
  let page: StorexPage;

  beforeEach(() => {
    page = new StorexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
