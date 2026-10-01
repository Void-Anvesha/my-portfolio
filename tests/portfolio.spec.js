import { test, expect } from '@playwright/test';

test('profile entrance, resume, navigation and profile return',async({page})=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading',{name:"Who's Watching?"})).toBeVisible();
  await expect(page.locator('.profile-choice')).toHaveCount(4);
  await page.getByRole('button',{name:'Recruiter',exact:true}).click();
  await expect(page.getByRole('heading',{name:"Explore My Portfolio"})).toBeVisible();
  await page.getByRole('navigation').getByRole('link',{name:'Hire Me',exact:true}).click();
  await page.getByRole('button',{name:'Email me',exact:true}).click();
  await expect(page.locator('.email-address')).toHaveText('anvesharastogi1717@gmail.com');
  await expect(page.getByRole('link',{name:'Compose in Gmail'})).toHaveAttribute('href','https://mail.google.com/mail/?view=cm&fs=1&to=anvesharastogi1717%40gmail.com');
  await expect(page.getByRole('link',{name:'Open email app'})).toHaveAttribute('href','mailto:anvesharastogi1717@gmail.com');
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {configurable:true,value:{writeText:async(text)=>{window.copiedEmail=text;}}}));
  await page.getByRole('button',{name:'Copy email',exact:true}).click();
  await expect(page.getByRole('status')).toHaveText('Email address copied!');
  expect(await page.evaluate(()=>window.copiedEmail)).toBe('anvesharastogi1717@gmail.com');
  const resume=await page.request.get('/Anvesha-Rastogi-Resume.pdf');
  expect(resume.status()).toBe(200);expect(resume.headers()['content-type']).toContain('application/pdf');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  await page.getByRole('navigation').getByRole('link',{name:'Home',exact:true}).click();await page.reload();await expect(page.getByRole('heading',{name:"Explore My Portfolio"})).toBeVisible();
  if(await page.getByRole('button',{name:/Switch profile/}).isVisible()){
    await page.getByRole('button',{name:/Switch profile/}).click();await expect(page.getByRole('heading',{name:"Who's Watching?"})).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('personas persist and top picks navigate to their sections',async({page},testInfo)=>{
  await page.goto('/');
  await page.screenshot({path:`test-results/${testInfo.project.name}-profiles.png`,fullPage:true});
  for(const persona of ['Developer','Stalker','Adventurer']){
    await page.getByRole('button',{name:persona,exact:true}).click();
    await expect(page.getByRole('heading',{name:"Explore My Portfolio"})).toBeVisible();
    await expect(page.getByRole('button',{name:`Switch profile, current profile ${persona}`})).toBeVisible();
    await page.reload();
    await expect(page.getByRole('heading',{name:"Explore My Portfolio"})).toBeVisible();
    if(persona!=='Adventurer')await page.getByRole('button',{name:/Switch profile/}).click();
  }
  for(const [name,id] of [['Skills','skills'],['Projects','projects'],['Certifications','certifications'],['Experience','professional'],['Contact Me','hire-me']]){
    await page.locator('.top-picks-row').getByRole('link',{name,exact:true}).click();
    await expect(page).toHaveURL(new RegExp(`/${id}$`));
    await expect(page.locator('.page-heading h1')).toBeVisible();
    await page.getByRole('navigation').getByRole('link',{name:'Home',exact:true}).click();
  }
  await expect(page.locator('.hero-actions').getByRole('link',{name:'LinkedIn'})).toHaveAttribute('href','https://www.linkedin.com/in/anvesha-rastogi-905535311');
});

test('home is an overview and details live on dedicated pages',async({page},testInfo)=>{
  await page.goto('/');await page.getByRole('button',{name:'Recruiter',exact:true}).click();
  await expect(page.locator('.hero')).toBeVisible();
  await expect(page.locator('.top-picks-row a')).toHaveCount(5);
  await expect(page.locator('.experience-section,.skills-section,.education-section,.credential-card,.project-detail,.hire-pitch')).toHaveCount(0);
  await expect(page.locator('.compact-footer')).toBeVisible();
  await page.screenshot({path:`test-results/${testInfo.project.name}-home-overview.png`,fullPage:true});
  await page.locator('.top-picks-row').getByRole('link',{name:'Projects',exact:true}).click();
  await expect(page.locator('.project-detail')).toHaveCount(6);
  await expect(page.locator('#clinsight')).toContainText('60-second');
  await expect(page.locator('#career')).toContainText('four domains');
});
