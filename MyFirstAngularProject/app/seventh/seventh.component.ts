import { Component } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css',
})
export class SeventhComponent {
  constructor(
    private vcf: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  async loadA() {
    this.vcf.clear();
    const { AComponent } = await import('../a/a.component');
    this.vcf.createComponent(this.cfr.resolveComponentFactory(AComponent));
  }
  async loadB() {
    this.vcf.clear();
    const { BComponent } = await import('../b/b.component');
    this.vcf.createComponent(this.cfr.resolveComponentFactory(BComponent));
  }
}
