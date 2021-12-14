import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  @HostBinding('style.color') colorLetra?: string;
  @HostBinding('style.top') posicionY?: string;
  @HostBinding('style.left') posicionX?: string;
  @HostBinding('style.position') position: string = 'absolute';
  @HostBinding('style.z-index') zindex: number = 1;

  @Input('appMarcar') color: string = 'yellow';

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('input') powerMode() {
    this.colorLetra = PowerModeDirective.getRandomColor();
    this.posicionX = PowerModeDirective.getRandomX() + 'px';
    this.posicionY = PowerModeDirective.getRandomY() + 'px';
  }

  private static getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  private static getRandomX(): number {
    return Math.abs(Math.random() * (window.innerWidth + 1));
  }

  private static getRandomY(): number {
    return Math.abs(Math.random() * (window.innerHeight + 1));
  }
}
