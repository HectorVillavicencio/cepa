import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { GtbComponent } from './domains/products/pages/gtb/gtb.component';
import { GeComponent } from './domains/products/pages/ge/ge.component';
import { MapComponent } from './domains/products/pages/map/map.component';

import path from 'path';

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
}
    
];
