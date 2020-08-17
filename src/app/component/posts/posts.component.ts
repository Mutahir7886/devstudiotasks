import { Component, OnInit } from '@angular/core';
import {Albums} from "../../shared/classes/albums";
import {HttpService} from "../../services/http.service";
import {apiUrls} from "../../../environments/apis/api.urls";
import {Photos} from "../../shared/classes/photos";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  Album_list:Albums[];
  Photos_list:Photos[];
  AlbumSelected:number;
  A="STRING";
  isExist=false;
  constructor(private httpService: HttpService) {


  }

  ngOnInit(): void {
    this.httpService.get(apiUrls.albumsUrl).subscribe(data => {
      this.Album_list = data;
    })

  }

  onAlbumSelected($event: any) {
    this.httpService.get(apiUrls.photosUrl+this.AlbumSelected).subscribe(data => {
      this.Photos_list = data;
      this.isExist=true;
    })
  }
}
