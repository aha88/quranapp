import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },

   { path: 'setting', 
   loadChildren: () => import('./page/setting/setting.module').then(m => m.SettingPageModule)},
   
  { path: '', loadChildren: './page/tabs/tabs.module#TabsPageModule' },
  { path: 'prayertime', loadChildren: './page/prayertime/prayertime.module#PrayertimePageModule' },
  { path: 'qiblat', loadChildren: './page/qiblat/qiblat.module#QiblatPageModule' },
  { path: 'about', loadChildren: './page/about/about.module#AboutPageModule' },
  { path: 'read-quran', loadChildren: './page/read-quran/read-quran.module#ReadQuranPageModule' },
  { path: 'read-quran2', loadChildren: './page/read-quran2/read-quran2.module#ReadQuran2PageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
