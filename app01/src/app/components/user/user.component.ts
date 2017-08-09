import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string = "Riaz Uddin";
  age:number;
  email:string;
  address:Address; //Custom type
  hobbies: string[]; //array
  hello: any[]; //array of anything
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) { 
    console.log("constructor ran...");

  }

  editUser() {
    this.isEdit = !this.isEdit;
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.name = "Riaz Uddin (ngOnInit)"
    this.age = 30;
    this.email="ruddin@gmail.com";
    this.address = {
      street: "350 Lincoln ST",
      city:"Santa Clara",
      state:"CA"
    }
    this.hobbies = ['Wrtie code', 'Watch movies', 'Listen to good things'];
    this.hello =[1,2,"anything"];
    
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    console.log("Hello");
    this.name = "Riaz";
    this.hobbies.push("New hobby");
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address{
    street:string,
    city:string,
    state:string
  }

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}