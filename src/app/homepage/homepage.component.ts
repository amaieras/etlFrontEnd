import {Component, OnInit} from '@angular/core';
import {HomepageService} from "./homepage.service";
import {Nodetype} from '../model/Nodetype';
import {Router} from '@angular/router';


// const URL = 'http://localhost:8182/nodetypes/files';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomepageService]
})
export class HomepageComponent implements OnInit {
  nodetypes: Nodetype[];
  uploadedFiles: any[] = [];

  constructor(private homepageService: HomepageService, private router: Router) {
  }

  ngOnInit() {
    this.getNodetypes();
  };

  getNodetypes() {
    this.homepageService.getAllNodetypes().subscribe(nodetypes => {
      this.nodetypes = nodetypes, error2 => 'Error getting nodetypes'
    });
  };

  goToDetails(id): void {
    this.router.navigate(['/nodetype', id]);
  };

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }


  }

}
