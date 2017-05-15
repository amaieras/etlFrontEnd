import {Component, Input, OnInit} from '@angular/core';
import {NodetypeService} from './nodetype.service';
import {Http} from "@angular/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Route} from "@angular/router";
import {HomepageService} from "../homepage/homepage.service";


@Component({
  selector: 'app-node-type',
  templateUrl: "./node-type.component.html",
  styleUrls: ['./node-type.component.css'],
  providers: [NodetypeService, HomepageService]
})

export class NodeTypeComponent implements OnInit {
  @Input() nodetypes: any[];
  @Input() nodetypeRows: any[];
  @Input() node;
  @Input() id;
  complexForm: FormGroup;

  constructor(private nodeTypeSvc: NodetypeService, private http: Http, private fb: FormBuilder, private route: ActivatedRoute, private homeSvc: HomepageService) {
    this.getNodetypes();
    this.complexForm = fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
  }

  getNodetypes() {
    this.homeSvc.getAllNodetypes().subscribe(nodetypes => this.nodetypes = nodetypes, error2 => 'Error getting nodetypes');
  };

  ngOnInit(): void {
    this.route.params.subscribe(a => this.id = a.id);
    this.homeSvc.getAllNodetypes().subscribe(nodetypes => {
      this.node = nodetypes.filter(a => {
        this.id == a.nodetypeid
      });
      console.log(this.node);

    })
  }

}
