import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';
import { EraListComponent } from './pages/era-list/era-list.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent,
        title: 'Home | CrickInformer',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'My Projects',
    },
    {
        path:'history',
        component: HistoryComponent,
        title:'Match History | CrickInformer',
    },
    {
        path:'live',
        component: LiveComponent, 
        title: 'Live Matches | CrickInformer '
    },
    {
        path:'point-table',
        component:PointTableComponent,
        title:'Point Table'
    },
    {
        path: 'era-list',
        component: EraListComponent,
        title: 'Live | Era Gaming',
    }
];
