import { App01Page } from './app.po';

describe('app01 App', () => {
  let page: App01Page;

  beforeEach(() => {
    page = new App01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
