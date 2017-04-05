import { NokiaEtlFrontEndPage } from './app.po';

describe('nokia-etl-front-end App', () => {
  let page: NokiaEtlFrontEndPage;

  beforeEach(() => {
    page = new NokiaEtlFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
