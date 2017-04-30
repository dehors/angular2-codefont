import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
	selector:'[myResaltador]'
})

export class ResaltadorDirective{
	constructor(private el: ElementRef, private render: Renderer){}
	colordefectotexto = 'blue';

	@Input() color:string;
	@Input() set colortext(colorr:string){
		this.colordefectotexto = colorr || this.colordefectotexto;
	}
	@HostListener('mouseenter') onMouserEnter(){
		this.Resaltar(this.color,this.colordefectotexto);
	}
	@HostListener('mouseleave') onMouserLeave(){
		this.Resaltar(null,this.colordefectotexto);
	}
	private Resaltar(color:string,colortext:string){
		this.render.setElementStyle(this.el.nativeElement,'backgroundColor',color);
		this.render.setElementStyle(this.el.nativeElement,'color',colortext);
	}
}