describe('Test Landing Page', () => {  

  it('should have title text', async () => {
    await expect(element(by.text('All Sites'))).toBeVisible();
  });

  it('Site Link should be visible', async () => {
    await expect(element(by.id('site-link-0001'))).toBeVisible();
  });

  it('Site Link should be clickable and should navigate to Site Detail', async () => {
    await expect(element(by.id('site-link-0001'))).toBeVisible();
    await element(by.id('site-link-0001')).tap();
    await expect(element(by.id('site-detail-0001'))).toBeVisible();
  });
  
});
