import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent
{
    ContactButtonPressed()
    {
        var fullNameInput = document.getElementById('fullNameInput') as HTMLInputElement;
        var phoneNumberInput = document.getElementById('phoneNumberInput') as HTMLInputElement;
        var emailAddressInput = document.getElementById('emailAddressInput') as HTMLInputElement;
        var messageTextArea = document.getElementById('messageTextArea') as HTMLTextAreaElement;

        if(fullNameInput.value.length <= 0 || phoneNumberInput.value.length <= 0 || emailAddressInput.value.length <= 0 || messageTextArea.value.length <= 0)
        {
            alert("Please enter all the details");
            return;
        }

        if(emailAddressInput.validity.typeMismatch)
        {
            alert("Please enter a valid email address");
            return;
        }

        alert("Successfully sent your contact form.");

        fullNameInput.value = "";
        phoneNumberInput.value = "";
        emailAddressInput.value = "";
        messageTextArea.value = "";
    }

    ngOnInit()
    {
        
    }
}
