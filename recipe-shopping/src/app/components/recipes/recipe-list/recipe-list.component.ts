import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Desc','https://upload.wikimedia.org/wikipedia/commons/a/ad/Dal_Gosht.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}
