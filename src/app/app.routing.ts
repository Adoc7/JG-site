import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { AccueilComponent } from './components/header/accueil/accueil.component'
import { PortfoliosComponent } from './components/body/portfolios/portfolios.component';
import { ErrorComponent } from './components/error/error.component';

const APP_ROUTING: Routes =[
 
 {path: '', component: AccueilComponent},

 {path: 'apropos',
  loadChildren: () => import("./modules/body/a-propos/a-propos.module")  
    .then(mod => mod.AProposModule)
  },
  
{path: 'portfolios', component: PortfoliosComponent},

 {path: 'technologies',
loadChildren: () => import("./modules/body/technologies/technologies.module") 
.then(mod => mod.TechnologiesModule)
},

 {path: 'parcours', 
 loadChildren: () => import("./modules/body/parcours/parcours.module")
  .then(mod => mod.ParcoursModule)
 },

 {path: '**', component: ErrorComponent}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTING, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled'});