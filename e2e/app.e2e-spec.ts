import { CitdFrontendPage } from './app.po';

describe('citd-frontend App', function() {
  let page: CitdFrontendPage;

  beforeEach(() => {
    page = new CitdFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
