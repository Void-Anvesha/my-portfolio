import {test,expect} from '@playwright/test';

test('theme toggle persists across pages and reloads',async({page},testInfo)=>{
  await page.goto('/');
  await page.getByRole('button',{name:'Switch to light theme',exact:true}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','light');
  await page.getByRole('button',{name:'Recruiter',exact:true}).click();
  await expect(page.getByRole('button',{name:'Switch to dark theme',exact:true})).toBeInViewport();
  await page.getByRole('navigation').getByRole('link',{name:'Skills',exact:true}).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme','light');
  await expect(page.locator('.technical-card').first()).toHaveCSS('background-color','rgb(255, 255, 255)');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:`test-results/${testInfo.project.name}-light-theme.png`});
  const toggle=page.getByRole('button',{name:'Switch to dark theme',exact:true});
  await toggle.focus();await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await page.reload();
  await expect(page.getByRole('button',{name:'Switch to light theme',exact:true})).toBeVisible();
});
