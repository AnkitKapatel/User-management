import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.models';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm  !: FormGroup;
  isLoading = false;
  userList: User[] = [];
  userModal: any;
  fileToUpload: any;
  imageUrl: any;
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.createUserForm();
    this.getUserList();
  }


  createUserForm() {
    this.userForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'first_name': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      'avatar': new FormControl('', [Validators.required]),
    })
  }
  getUserList() {
    this.isLoading = true;
    this.users.getAllUsers().subscribe((res: any) => {
      this.isLoading = false;
      this.userList = res.data;
    }, err => {
      alert("Error occured in geting UserList")
    })
  }

  AddUserData() {
    this.userModal = Object.assign({}, this.userForm.value);
    this.users.AddUser(this.userModal).subscribe((res: any) => {
      alert("UserData added successfully");
      this.userForm.reset();
      this.getUserList();
    }, err => {
      alert("Error occured in Add UserData")
    })
  }

  DeleteUserData(id: number) {
    this.users.DeleteUser(id).subscribe((res: any) => {
      alert("UserData deleted successfully");
      this.getUserList();
    }, err => {
      alert("Error occured in delete UserData")
    })
  }


  handleFileInput($event: any) {
    const file: FileList = $event.target.files;
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}

