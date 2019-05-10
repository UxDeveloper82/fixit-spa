import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

   getBlogs(): Observable<Blog[]> {
     return this.http.get<Blog[]>(this.baseUrl + 'blogs');
   }

   getBlog(id): Observable<Blog> {
     return this.http.get<Blog>(this.baseUrl + 'blogs/' + id);
   }

   updateBlog(id: number, blog: Blog) {
     return this.http.put(this.baseUrl + 'blogs/' + id, blog);
   }
}
