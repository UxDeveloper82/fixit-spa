import { AlertifyService } from './../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from './../../_models/blog';
import { BlogService } from './../../_services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService, private route: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit() {
    // this.getBlogs();
    this.route.data.subscribe(data => {
      this.blogs = data['blogs'];
    });

  }

  // getBlogs() {
  //   this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
  //     this.blogs = blogs;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
