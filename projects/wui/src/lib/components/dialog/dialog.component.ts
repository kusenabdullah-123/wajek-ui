import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'wui-dialog',
  template: `
    <div class="wui-modal">
      <div class="wui-modal-inner">
        <div class="wui-modal-header">{{data?.title ?? ""}}</div>
        <div class="wui-modal-content">{{data?.message ?? ""}}</div>
        <div class="wui-modal-footer">
          <div class="d-flex justify-content-end">
            @for(caption of (data?.buttons ?? []); track $index) {
              <button class="wui-button wui-button-smooth" (click)="close($index)">
                {{caption}}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  `
})

export class DialogComponent {
  data = inject(DIALOG_DATA);
  ref = inject(DialogRef);

  close(index) {
    this.ref.close(index);
  }
}
