import { AidEyeAdminPage } from './app.po';

describe('aid-eye-admin App', () => {
  let page: AidEyeAdminPage;

  beforeEach(() => {
    page = new AidEyeAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
