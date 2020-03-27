import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; 


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }
  //// -----> Get Values
  get name(){
    return this.regForm.get('name');
  }
  get email(){
    return this.regForm.get('email');
  }
  get tel(){
    return this.regForm.get('tel');
  }
  //// -----> Error Messages
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Campo obligatorio';
    }
    return this.name.hasError('pattern') ? 'Formato de nombre incorrecto' : '';
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Campo obligatorio';
    }
    return this.email.hasError('email') ? 'Formato de email incorrecto' : '';
  }
  getErrorMessageTel(){
    if(this.tel.hasError('required'))
    {
      return 'Campo obligatorio';
    }return this.tel.hasError('pattern') ? 'Formato de teléfono incorrecto' : '';
  }  
  // -----> Fields validation rules
  regForm = this.formBuilder.group ({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3}')]],
    email:['',[Validators.required, Validators.email]],
    tel: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
    com: ['']
  });
  ngOnInit() {

  } 
  save(){
    console.log(this.regForm.value);
  }
}
