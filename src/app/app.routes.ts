import { Routes } from '@angular/router';
import { HomeComponent } from './@components/home/home.component';
import { GithubListComponent } from './@components/github-list/github-list.component';
import { GithubComponent } from './@components/github/github.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },{
        path: 'users',
        component: GithubListComponent,
        children: [
            {
                path: ':id',
                component: GithubComponent
            }
        ]
    },{
        path: '**',
        redirectTo: 'users'
    }
];
