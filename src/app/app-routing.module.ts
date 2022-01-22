import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/site-details',
    pathMatch: 'full',
  },
  { path: 'site-details', pathMatch: 'full', component: SiteDetailsComponent },
  { path: 'sample', pathMatch: 'full', component: SampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
