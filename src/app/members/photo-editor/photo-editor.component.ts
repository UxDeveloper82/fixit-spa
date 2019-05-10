import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from './../../_services/auth.service';
import { Photo } from 'src/app/_models/photo';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }


  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

    initializeUploader() {
      this.uploader = new FileUploader({
        url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
        authToken: 'Bearer ' + localStorage.getItem('token'),
        isHTML5: true,
        allowedFileType: ['image'],
        removeAfterUpload: true,
        autoUpload: false,
        maxFileSize: 10 * 1024 * 1024
      });

      this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

      this.uploader.onSuccessItem = (item, response, status, headers) => {
          if (response) {
            const res: Photo = JSON.parse(response);
            const photo = {
              id: res.id,
              url: res.url,
              dateAdded: res.dateAdded,
              description: res.description,
              isMain: res.isMain
            };
            this.photos.push(photo);
          }
      };
    }
}
