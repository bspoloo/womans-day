import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeartComponent } from '../../components/heart/heart.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HeartComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  public title = 'womans-day';
  public herName = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ name }) => name))
      .subscribe((name) => {
        if (!name) {
          console.log('No hay name xd');
          return;
        }
        this.herName += String(name);
        return;
      });
  }
}
