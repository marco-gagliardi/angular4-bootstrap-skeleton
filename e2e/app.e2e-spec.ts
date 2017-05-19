import { AngularSkeletonPage } from './app.po';

describe('angular-skeleton App', () => {
  let page: AngularSkeletonPage;

  beforeEach(() => {
    page = new AngularSkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
