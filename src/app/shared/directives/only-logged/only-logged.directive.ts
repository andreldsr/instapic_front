import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({ selector: '[olOnlyLogged]' })
export class OnlyLoggedDirective implements OnInit {

    parentNode: ElementRef;
    nextNode: ElementRef;
    constructor(private userService: UserService, private renderer: Renderer2, private element: ElementRef) { }

    ngOnInit(): void {
        this.parentNode = this.renderer.parentNode(this.element.nativeElement);
        this.nextNode = this.renderer.nextSibling(this.element.nativeElement);
        this.userService.getUser()
            .subscribe(user => {
                if (!user) {
                    this.renderer.removeChild(this.parentNode, this.element.nativeElement);
                } else {

                    this.renderer.insertBefore(this.parentNode, this.element.nativeElement, this.nextNode);
                }
            });
    }
}
