import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { LinkedinComponent }  from  './linkedin/linkedin.component';
import { SkillComponent }  from  './skill/skill.component';
import { ContactComponent }  from  './contact/contact.component';

const appRoutes: Routes = [
{
    path: '',
    component: HomeComponent,

},
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'linkedin',
    component: LinkedinComponent,
  },
  {
    path: 'skill',
    component: SkillComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },


];

export default appRoutes;
