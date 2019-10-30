import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { TestRequestsComponent } from './_pages/test-requests/test-requests.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'test-requests', component: TestRequestsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' },
];

export const routing = RouterModule.forRoot(routes);
