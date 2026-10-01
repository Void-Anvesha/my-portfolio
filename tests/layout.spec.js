import {test,expect} from '@playwright/test';

test('hero content stays separated from Top Picks across screen sizes and zoom',async({page},testInfo)=>{
  await page.goto('/');
  await page.getByRole('button',{name:'Developer',exact:true}).click();
  await expect(page.locator('.hero h1')).toBeVisible();
  const widths=testInfo.project.name==='mobile'?[390,320]:[1920,1440,1024,768];
  for(const width of widths){
    await page.setViewportSize({width,height:1000});
    for(const zoom of [1,1.25]){
      await page.evaluate(value=>{document.body.style.zoom=String(value);},zoom);
      const boxes=await page.evaluate(()=>{
        const box=selector=>{const r=document.querySelector(selector).getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right};};
        return {title:box('.hero h1'),bio:box('.hero-description'),actions:box('.hero-actions'),picks:box('.top-picks-row .section-heading'),hero:box('.hero'),overflow:document.documentElement.scrollWidth>innerWidth};
      });
      expect(boxes.bio.top-boxes.title.bottom).toBeGreaterThanOrEqual(20);
      expect(boxes.actions.top-boxes.bio.bottom).toBeGreaterThanOrEqual(20);
      expect(boxes.picks.top-boxes.actions.bottom).toBeGreaterThanOrEqual(40);
      expect(boxes.hero.bottom).toBeLessThanOrEqual(boxes.picks.top);
      expect(Math.abs(boxes.title.left-boxes.picks.left)).toBeLessThan(2);
      expect(boxes.overflow).toBe(false);
    }
  }
  const preview=await page.context().newPage();
  await preview.setViewportSize({width:testInfo.project.name==='mobile'?390:1920,height:1000});
  await preview.addInitScript(()=>sessionStorage.setItem('anvesha-persona','Developer'));
  await preview.goto('/');
  await expect(preview.locator('.hero h1')).toBeVisible();
  await preview.screenshot({path:`test-results/${testInfo.project.name}-hero-spacing.png`});
  await preview.close();
});
