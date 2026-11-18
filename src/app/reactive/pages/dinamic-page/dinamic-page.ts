import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'dinamic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './dinamic-page.html',
})
export class DinamicPageComponent {


  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myDinamicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required, Validators.minLength(3)]],
      ['Mario Wonderful', [Validators.required, Validators.minLength(3)]],
    ], Validators.minLength(2)),
  });

  newFavorite = new FormControl('', Validators.required);
  // newFavorite = this.fb.control([])


  get favoriteGames() {
    return this.myDinamicForm.get('favoriteGames') as FormArray;
  }

 onAddToFavorites() {
  if(this.newFavorite.invalid) return;
  const newGame = this.newFavorite.value;
  this.favoriteGames.push(this.fb.control(newGame, Validators.required));
  this.newFavorite.reset();
 }

  onDeleteFavorite(i: number) {
      this.favoriteGames.removeAt(i);
  }

  onSubmit() {
     this.myDinamicForm.markAllAsTouched()
}

}
