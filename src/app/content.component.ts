import  { Component } from '@angular/core';

@Component ({
	selector:'contenido',
	template:`
		<h1>
			<ng-content select=".titulo">
			</ng-content>
		</h1>
		<p>
			<ng-content body=".titulo">
			</ng-content>
		<p>
	`
})

export class ContentComponent{

}