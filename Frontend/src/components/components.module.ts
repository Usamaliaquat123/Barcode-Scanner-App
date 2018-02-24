import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page';
import { BarcodegeneratorOptionsComponent } from './barcodegenerator-options/barcodegenerator-options';
@NgModule({
	declarations: [HomePageComponent,
    BarcodegeneratorOptionsComponent],
	imports: [],
	entryComponents : [
		BarcodegeneratorOptionsComponent,
		HomePageComponent
	],
	exports: [HomePageComponent,
    BarcodegeneratorOptionsComponent]
})
export class ComponentsModule {}
