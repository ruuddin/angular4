import { App02Page } from './app.po';

describe('app02 App', () => {
  let page: App02Page;

  beforeEach(() => {
    page = new App02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
