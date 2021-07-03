import { UserService } from './../../../core/user/user.service';
import { Directive, Input, Renderer2, OnInit, ElementRef } from '@angular/core';
import { Photo } from '../../photo';

@Directive({
  selector: '[olOwnerOnly]'
})
export class OwnerOnlyDirective implements OnInit {

  @Input() photo: Photo;
  constructor(private userService: UserService, private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => {
        if (!user || user.id !== this.photo.userId) {
          this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        }
      });
  }


}
