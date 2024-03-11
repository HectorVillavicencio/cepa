import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { GtbComponent } from './domains/products/pages/gtb/gtb.component';
import path from 'path';

export const routes: Routes = [{
    path:'',
    component: HomeComponent
},
{
    path:'gtb',
    component: GtbComponent
}
    
];
