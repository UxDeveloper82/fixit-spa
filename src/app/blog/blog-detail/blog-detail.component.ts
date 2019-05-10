import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../_services/blog.service';
import { Blog } from './../../_models/blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.getBlog();
    this.route.data.subscribe(data => {
      this.blog = data['blog'];
    });
  }

  // getBlog() {
  //   this.blogService.getBlog(+this.route.snapshot.params['id']).subscribe((blog: Blog) => {
  //     this.blog = blog;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
