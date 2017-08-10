import { RecipeShoppingPage } from './app.po';

describe('recipe-shopping App', () => {
  let page: RecipeShoppingPage;

  beforeEach(() => {
    page = new RecipeShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
