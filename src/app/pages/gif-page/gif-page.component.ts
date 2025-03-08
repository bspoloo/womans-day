import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Whatsapp } from '../../classes/whatsapp.class';
interface GifButton {
  name: string;
  isTouched: boolean;
}
@Component({
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './gif-page.component.html',
  styleUrl: './gif-page.component.css',
})
export class GifPageComponent {
  public myForm: FormGroup;
  private whatsapp : Whatsapp;
  public buttons: GifButton[];
  public isPopupOpen = false;
  public isSendOpen = false;

  constructor(private fb: FormBuilder) {
    this.whatsapp = new Whatsapp('59172612649')
    this.buttons = [
      {
        name: 'Un Among Us gigante',
        isTouched: false,
      },
      {
        name: 'Flores',
        isTouched: false,
      },
      {
        name: 'Un monton de helado',
        isTouched: false,
      },
      {
        name: 'Chocolates',
        isTouched: false,
      },
      {
        name: 'La caja misteriosa :v',
        isTouched: false,
      },
      {
        name: 'Dulces',
        isTouched: false,
      },
    ];
    this.myForm = fb.group({
      message: [``, [Validators.required]],
    });
  }
  public addToGifToMessage(index: number): void {
    let currentGif: GifButton = this.buttons[index];
    console.log('index ' + index, currentGif);

    if (!currentGif.isTouched) {
      currentGif.isTouched = true;
    } else {
      currentGif.isTouched = false;
    }
    this.myForm.controls['message'].setValue(
      'De regalo quiero ' +
        this.buttons
          .filter((item) => item.isTouched)
          .map((item) => item.name)
          .join(' , \n')
    );
  }

  public sentToWhatsapp(): void {
    const activeItems = this.buttons
      .filter((item) => item.isTouched)
      .map((item) => item);

    if (activeItems.length === 0) {
      this.isPopupOpen = true;
      return;
    }
    this.isSendOpen = true;
    setTimeout(() => {
      this.whatsapp.setMessage(this.myForm.controls['message'].value)
      this.whatsapp.sentToWhatsapp()
    }, 4000);
  }
  public closePopup() {
    this.isPopupOpen = false;
  }
  public closeSendPopup() {
    this.isSendOpen = false;
  }
}
