import { AngularNgrxLazyLoadingExamplePage } from './app.po';

describe('angular-ngrx-lazy-loading-example App', () => {
  let page: AngularNgrxLazyLoadingExamplePage;

  beforeEach(() => {
    page = new AngularNgrxLazyLoadingExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
