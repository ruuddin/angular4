import { DatabindingAssignmentPage } from './app.po';

describe('databinding-assignment App', () => {
  let page: DatabindingAssignmentPage;

  beforeEach(() => {
    page = new DatabindingAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
