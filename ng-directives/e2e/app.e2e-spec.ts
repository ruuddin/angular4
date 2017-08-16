import { NgDirectivesPage } from './app.po';

describe('ng-directives App', () => {
  let page: NgDirectivesPage;

  beforeEach(() => {
    page = new NgDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
