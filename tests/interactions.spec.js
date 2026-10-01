import { test, expect } from '@playwright/test';

test('quick navigation, skill search and reduced motion', async ({page}) => {
  await page.goto('/professional');
  await page.getByRole('button',{name:'Quick navigation',exact:true}).click();
  const dialog = page.getByRole('dialog',{name:'Explore my portfolio'});
  await expect(dialog).toBeVisible();
  await page.getByRole('textbox',{name:'Find a page'}).fill('skills');
  await dialog.getByRole('link',{name:'Skills'}).click();
  await page.getByRole('searchbox',{name:'Explore my skills'}).fill('Python');
  await expect(page.locator('.technical-card')).toHaveCount(1);
  await expect(page.locator('.technical-card')).toContainText('Python');
  await page.getByRole('searchbox',{name:'Explore my skills'}).fill('zzzz');
  await expect(page.getByText('No matching skills. Try another technology.')).toBeVisible();
  await page.keyboard.press('Control+k');
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole('button',{name:'Quick navigation',exact:true})).toBeFocused();
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const path of ['/','/professional','/projects','/certifications','/hire-me']) {
    await page.goto(path);
    if(path === '/') {
      const entrance = page.getByRole('button',{name:'Recruiter',exact:true});
      if(await entrance.isVisible()) await entrance.click();
    }
    await expect(page.getByRole('button',{name:'Quick navigation',exact:true})).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
