import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';


@Component({
  selector: 'circulo-progreso',
  templateUrl: './circulo-progreso.component.html',
})
export class CirculoProgreso implements OnInit {
  @Input() progress: number;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgress = document.getElementById('progress');
    scrollProgress!.style.background = `conic-gradient(#008fff ${this.progress}%, #f2f2f4 ${this.progress}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}