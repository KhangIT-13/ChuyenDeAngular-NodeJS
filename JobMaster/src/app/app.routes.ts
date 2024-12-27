import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { LoginEmployeesComponent } from './components/login-employees/login-employees.component';
import { LoginEmployersComponent } from './components/login-employers/login-employers.component';
import { PublishedRecruitmentComponent } from './components/published-recruitment/published-recruitment.component';
import { RegisterEmployeesComponent } from './components/register-employees/register-employees.component';
import { RegisterEmployersComponent } from './components/register-employers/register-employers.component';
import { ChatRealtimeComponent } from './components/chat-realtime/chat-realtime.component';
import { ChatComponent } from './components/chat/chat.component';
import { PublishListComponent } from './components/publish-list/publish-list.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { AdminIndexComponent } from './components/admin-index/admin-index.component';

export const routes: Routes = [
    {path : '', component : HomeComponent, },
    {path : 'search', component : SearchComponent},
    {path : 'jobdetail', component : JobDetailComponent},
    {path : 'jobdetail/:id', component : JobDetailComponent},
    {path : 'jobsearch', component : JobSearchComponent},
    {path : 'login', component : LoginEmployeesComponent},
    {path : 'login-employer', component : LoginEmployersComponent},
    {path : 'published', component : PublishedRecruitmentComponent},
    {path : 'published/:id', component : PublishedRecruitmentComponent},
    {path : 'register', component : RegisterEmployeesComponent},
    {path : 'register-employer', component : RegisterEmployersComponent},
    {path : 'chatr', component : ChatRealtimeComponent},
    {path : 'chat', component : ChatComponent},
    {path : 'publishlist', component: PublishListComponent},
    {path : 'applicationlist', component: ApplicationListComponent},
    {path : 'admin-index', component: AdminIndexComponent},
];
