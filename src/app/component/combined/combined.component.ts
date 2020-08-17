import {Component} from '@angular/core';
import {freeApiService} from "../../services/apiservice"
import {Covidd} from "../../shared/classes/covid_interface";
import {Posts} from "../../shared/classes/post_data";
import {MatTableDataSource} from '@angular/material/table';
import {ToastrService} from 'ngx-toastr';
import {HttpService} from "../../services/http.service";
import {apiUrls} from "../../../environments/apis/api.urls";


@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.css']
})
export class CombinedComponent {

  Covid_data: Covidd[];
  get_comments: Posts[];
  get_comments_parameter: Posts[];
  message: string;
  objPost: Posts;
  matData: any;

  displayedColumns: string[] = ['Country', 'TotalConfirmed', 'NewDeaths'];


  constructor(private freeapiService: freeApiService, private toastr: ToastrService, private httpService: HttpService) {
  }

  ngOnInit() {

    //get covid data
    this.httpService.get(apiUrls.covid_summary).subscribe(data => {
      let dataa = data.Countries.slice(0, 10)
      this.Covid_data = dataa;
      this.matData = new MatTableDataSource(this.Covid_data);
    });

    // get comments data
    this.httpService.get(apiUrls.Comments_summary).subscribe(data => {
      this.get_comments = data;
    })


    this.httpService.get(apiUrls.Comments_summary_user1+'1').subscribe(data => {
      this.get_comments_parameter = data;
    })

    // this.httpService.getWithParams(apiUrls.Comments_summary_user1,"1").subscribe(data => {
    //   this.get_comments_parameter = data;
    // })


    var opost = new Posts()
    opost.body = "TestBody";
    opost.title = "TestTitle";
    opost.userId = 5;

    this.httpService.post(apiUrls.Comments_summary,opost).subscribe(data=>{
      this.objPost = data;
    })

  }

  CHK() {
    console.log(this.Covid_data);
  }

  showdelete()
  {
    this.httpService.delete(apiUrls.deleteInfo).subscribe(data => {
        this.message = "THe resource has been deleted";
        this.toastr.success(this.message);
      }
      , error => {
        this.toastr.error(this.message);

      }
    );
  }


}
