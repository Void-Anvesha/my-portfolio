import { test, expect } from '@playwright/test';

test('professional highlights and contributions work on all screen sizes', async ({ page }) => {
  await page.goto('/professional');
  const card = page.locator('.experience-interactive');
  await expect(card.locator('.experience-highlight-detail')).toContainText('15,000+');
  const api = card.getByRole('button', { name: /API performance/ });
  await api.click();
  await expect(api).toHaveAttribute('aria-pressed', 'true');
  await expect(card.locator('.experience-highlight-detail')).toContainText('400 ms to 300 ms');
  const chatbot = card.getByRole('button', { name: /Financial chatbot/ });
  await chatbot.focus();
  await page.keyboard.press('Enter');
  await expect(card.locator('.experience-highlight-detail')).toContainText('4.3/5');
  await card.locator('summary').click();
  await expect(card.locator('li')).toHaveCount(3);
  await expect(card.locator('li').first()).toBeVisible();
  await card.locator('summary').click();
  await expect(card.locator('li').first()).toBeHidden();
  await expect(page.locator('.professional-education .education-card')).toHaveCount(2);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  await expect(api).toBeVisible();
});
