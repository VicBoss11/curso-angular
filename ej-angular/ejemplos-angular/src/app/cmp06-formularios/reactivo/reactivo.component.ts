import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/cmp06-formularios/validators/custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: formBuilder.control(
        '',
        [Validators.required, Validators.minLength(3), CustomValidators.esStark]
      ),
      email: formBuilder.control(
        'aaa@aaa.com',
        [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.(com|es|net)/)]
      ),
      password: formBuilder.control(
        '',
        [
          Validators.required,
          Validators.minLength(8),
          CustomValidators.esPasswordSegura({mayus: true, simbolos: true})
        ]
      )
    }, /*{ updateOn: 'blur' }*/);

    // this.form = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl(
    //     'aaa@aaa.com',
    //     [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.(com|es|net)/)]
    //   ),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
    // });
  }

  get usernameInput(): AbstractControl {
    return this.form.controls['username'];
  }

  get emailInput(): AbstractControl {
    return this.form.controls['email'];
  }

  get passwordInput(): AbstractControl {
    return this.form.controls['password'];
  }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.form);
  }

  showErrors(field: AbstractControl): boolean {
    return field.invalid && field.dirty;
  }
}
