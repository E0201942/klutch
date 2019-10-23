import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)},
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'displaytext', loadChildren: './pages/displaytext/displaytext.module#DisplaytextPageModule' },
  { path: 'success', loadChildren: './pages/success/success.module#SuccessPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
