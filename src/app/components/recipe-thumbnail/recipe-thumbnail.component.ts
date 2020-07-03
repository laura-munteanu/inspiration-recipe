import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recipe-thumbnail',
  templateUrl: './recipe-thumbnail.component.html',
  styleUrls: ['./recipe-thumbnail.component.scss']
})
export class RecipeThumbnailComponent implements OnInit {
  @Input() recipe: any;
  constructor() { }

  ngOnInit() {
    
  }
}
