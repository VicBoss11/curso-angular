import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef;

  videoElement!: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.videoElement = this.videoRef.nativeElement;
    this.videoElement.volume = 0.5;
    this.videoElement.play();
  }

  play(): void {
    this.videoElement.play();
  }

  pause(): void {
    this.videoElement.pause();
  }

  changeVolume(event: any): void {
    this.videoElement.volume = event.target.value / 100;
  }

  fullScreen(): void {
    this.videoElement.requestFullscreen().then();
  }

  replay(): void {
    this.videoElement.currentTime = 0;
  }

  goBack(): void {
    this.videoElement.currentTime -= 15;
  }

  goForward(): void {
    this.videoElement.currentTime += 10;
  }
}
