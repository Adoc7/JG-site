import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    private http: HttpClient,
    ) {}
/*   submitForm = new FormGroup({
    email: new FormControl('', Validators.required)
  }) */
  ngOnInit(): any {   
    $('.parentFN > *')
    .focus(function() {
        $('.parentFN ').addClass('focused');
    })
    .blur(function() {
        $('.parentFN ').removeClass('focused');
    });
    $('.parentLN > *')
    .focus(function() {
        $('.parentLN ').addClass('focused');
    })
    .blur(function() {
        $('.parentLN ').removeClass('focused');
    });
    $('.parentPN > *')
    .focus(function() {
        $('.parentPN ').addClass('focused');
    })
    .blur(function() {
        $('.parentPN ').removeClass('focused');
    });
    $('.parentEM > *')
    .focus(function() {
        $('.parentEM ').addClass('focused');
    })
    .blur(function() {
        $('.parentEM ').removeClass('focused');
    });
    $('.parentME > *')
    .focus(function() {
        $('.parentME ').addClass('focused');
    })
    .blur(function() {
        $('.parentME ').removeClass('focused');
    });
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
    }else{
      alert("Le formulaire n'est pas validé.\nVeuillez saisir correctement les champs obligatoires");
    }
  }

}
