import { AlertifyService } from './../_services/alertify.service';
import { BlogService } from './../_services/blog.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../_models/blog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class BlogDetailResolver implements Resolve<Blog> {

    constructor(private blogService: BlogService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Blog> {
       return this.blogService.getBlog(route.params['id']).pipe(
           catchError(error => {
               this.alertify.error('Problem retrieving data');
               this.router.navigate(['/blog']);
               return of(null);
           })
       );
    }
}

