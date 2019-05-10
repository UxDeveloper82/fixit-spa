import { Blog } from './../../_models/blog';
import { AlertifyService } from './../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../_services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

}

