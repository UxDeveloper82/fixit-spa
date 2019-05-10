import { AuthService } from './../_services/auth.service';
import { AlertifyService } from './../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class BlogEditResolver implements Resolve<Blog> {
    constructor(private blogService: BlogService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Blog> {
            return this.blogService.getBlog(this.authService.decodedToken.nameid).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving your data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}

