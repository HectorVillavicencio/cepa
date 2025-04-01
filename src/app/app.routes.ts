import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { GtbComponent } from './domains/products/pages/gtb/gtb.component';
import { GeComponent } from './domains/products/pages/ge/ge.component';
import { MapComponent } from './domains/products/pages/map/map.component';
import { CarrerascytComponent } from './domains/products/pages/carrerascyt/carrerascyt.component';
import { CarrerasdeeyadComponent } from './domains/products/pages/carrerasdeeyad/carrerasdeeyad.component';
import { CarrerasdesocComponent } from './domains/products/pages/carrerasdesoc/carrerasdesoc.component';
import { CarrerasdeeaComponent } from './domains/products/pages/carrerasdeea/carrerasdeea.component';
import { CalendarioacademicoComponent } from './domains/products/pages/calendarioacademico/calendarioacademico.component';
import { QuienessomosComponent } from './domains/products/pages/quienessomos/quienessomos.component';
import { ErrorpagesComponent } from './domains/products/pages/errorpages/errorpages.component';


export const routes: Routes = [{
    path:'',
    component: HomeComponent
},
{
    path:'gtb',
    component: GtbComponent
},
{
    path:'ge',
    component: GeComponent
},
{
    path:'map',
    component: MapComponent
},
{
    path:'inag',
    component: CarrerascytComponent
},
{
    path:'cisa',
    component: CarrerasdeeyadComponent
},
{
    path:'soad',
    component: CarrerasdesocComponent
},
{
    path:'esin',
    component: CarrerasdeeaComponent
},
{
    path:'calena',
    component: CalendarioacademicoComponent
},
{
    path:'quiness',
    component: QuienessomosComponent
},
{
    path:'**',
    component: ErrorpagesComponent
}

];
