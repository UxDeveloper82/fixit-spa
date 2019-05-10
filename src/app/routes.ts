import { BlogDetailResolver } from './_resolvers/blog-detail.resolver';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { RepairsListComponent } from './repairs/repairs-list/repairs-list.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'repairs', component: RepairsListComponent},
    {
       path: '',
       runGuardsAndResolvers: 'always',
       canActivate: [AuthGuard],
       children: [
        { path: 'members', component: MemberListComponent,
            resolve: { users: MemberListResolver}},
        { path: 'members/:id', component: MemberDetailComponent,
          resolve: {user: MemberDetailResolver}},
        { path: 'member/edit', component: MemberEditComponent,
           resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent },
        { path: 'blog', component: BlogListComponent,
            resolve: { blogs: BlogListResolver }},
        { path: 'blog/:id', component: BlogDetailComponent,
            resolve: { blog: BlogDetailResolver }},
        { path: 'blog/edit', component: BlogEditComponent },
       ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

