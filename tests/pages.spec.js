import {test,expect} from '@playwright/test';

test('navbar opens dedicated pages with details and supports refresh and history',async({page},testInfo)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');await page.getByRole('button',{name:'Developer',exact:true}).click();
  for(const [label,path,text] of [['Professional','professional','15,000+'],['Skills','skills','LangChain'],['Projects','projects','60-second'],['Hire Me','hire-me','Have a role in mind?']]){
    await page.getByRole('navigation').getByRole('link',{name:label,exact:true}).click();
    await expect(page).toHaveURL(new RegExp(`/${path}$`));
    await expect(page.getByRole('navigation').getByRole('link',{name:label,exact:true})).toHaveAttribute('aria-current','page');
    await expect(page.locator('.detail-page')).toContainText(text);
    await expect(page.locator('.hero')).toHaveCount(0);
    await page.reload();await expect(page.locator('.detail-page')).toContainText(text);
    if(path==='professional'){
      await expect(page.getByRole('heading',{name:'GitHub Activity'})).toBeVisible();
      await expect(page.locator('.github-activity-chart img')).toHaveAttribute('src','https://ghchart.rshah.org/e50914/Void-Anvesha');
    }
    if(path==='skills'){
      await expect(page.locator('.page-heading h1')).toHaveText('Technical Skills.');
      await expect(page.locator('.technical-card').filter({has:page.getByRole('heading',{name:'PyTorch',exact:true})})).toContainText('fine-tune BERT');
      await page.screenshot({path:`test-results/${testInfo.project.name}-skills-page.png`});
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
  await page.goBack();await expect(page).toHaveURL(/\/projects$/);
  await page.goForward();await expect(page).toHaveURL(/\/hire-me$/);
  await page.getByRole('navigation').getByRole('link',{name:'Projects',exact:true}).click();
  await page.screenshot({path:`test-results/${testInfo.project.name}-projects-page.png`,fullPage:true});
  expect(errors).toEqual([]);
});

test('shared detail URLs work without selecting a profile first',async({page},testInfo)=>{
  await page.goto('/professional');
  await expect(page.locator('.page-heading h1')).toContainText('My work so far');
  await expect(page.locator('.professional-detail')).toContainText('400 ms to 300 ms');
  await page.getByRole('link',{name:'Certifications & achievements'}).click();
  await expect(page).toHaveURL(/\/certifications$/);
  await expect(page.locator('.certifications-page-grid')).toContainText('Google IT Support');
  await expect(page.locator('.credential-card')).toHaveCount(6);
  await page.screenshot({path:`test-results/${testInfo.project.name}-certifications.png`});
});
