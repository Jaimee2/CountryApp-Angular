import {Routes} from '@angular/router';
import {HomePagesComponent} from "./shared/pages/home-pages/home-pages.component";
import {AboutPageComponent} from "./shared/pages/about-page/about-page.component";
import {ContactPageComponent} from "./shared/pages/contact-page/contact-page.component";

export const routes: Routes =
  [
    {
      path: 'home',
      component: HomePagesComponent
    },
    {
      path: 'about',
      component: AboutPageComponent
    },
    {
      path: 'contact',
      component: ContactPageComponent
    },
    {
      path: 'countries',
      //lazy load
      loadChildren: () => import('./countries/countries.routes')
        .then(r => r.countriesRoutes)
    },
    {
      path: '**',
      redirectTo: 'countries'
    }
  ];
