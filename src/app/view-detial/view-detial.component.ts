import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-detial',
  templateUrl: './view-detial.component.html',
  styleUrl: './view-detial.component.css'
})
export class ViewDetialComponent {

  propertyData: any;

  url: string = "";

  constructor(private rt: ActivatedRoute,private data:DataService) {}

  ngOnInit() {
    const paramData = this.rt.snapshot.paramMap.get('id');
    this.propertyData = this.data.getFilteredDetails(paramData);
    this.url = this.propertyData[0].imgSrc;
  }

  imagePreview(n: string) {
    this.url = n;
  }

}
