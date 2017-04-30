import { CodigoFuentePage } from './app.po';

describe('codigo-fuente App', () => {
  let page: CodigoFuentePage;

  beforeEach(() => {
    page = new CodigoFuentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
