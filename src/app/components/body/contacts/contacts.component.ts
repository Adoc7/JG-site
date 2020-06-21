import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mqkylbor',
         { firstname: email.firstname, name: email.lastname, replyto: email.email, message: email.message, phonenumber : email.phonenumber },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}
