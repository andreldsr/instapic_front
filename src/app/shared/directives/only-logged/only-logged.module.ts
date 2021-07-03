import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnlyLoggedDirective } from './only-logged.directive';

@NgModule({
    imports: [CommonModule],
    exports: [OnlyLoggedDirective],
    declarations: [OnlyLoggedDirective],
})
export class OnlyLoggedModule { }
