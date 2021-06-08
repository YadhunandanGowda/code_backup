import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public index: number;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = parseInt(params.get('id'), 0);
    });
  }

}
