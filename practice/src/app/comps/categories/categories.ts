import { Component } from '@angular/core';
import { Spinner } from '../spinner/spinner';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

    items:any = ['one','two','three']
    username = 'Jay';

    isLoggedIn = true;


}
