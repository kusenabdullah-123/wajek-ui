import { inject, Injectable, TemplateRef } from '@angular/core';
import { MessageService } from './message.service';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';
import { ComponentType } from '@angular/cdk/portal';
import { WuiModal } from '../components/modal/modal-overlay';

@Injectable({
  providedIn: 'root'
})
export class WuiService {

  messageService = inject(MessageService);
  rootDialog = inject(Dialog);
  loadingRef: DialogRef;

  wuiModal = inject(WuiModal);
  /**
   * 
   * @deprecated This method included on future deprecation, use modalService.open()
   * 
   */
  modal(component: ComponentType<any> | TemplateRef<any>, config?: DialogConfig): DialogRef {
    return this.wuiModal.open(component, config);
  }

  dialog(params: any) {
    return new Promise((resolve) => {
      let ref = this.rootDialog.open(DialogComponent, {disableClose: true, width: '350px', data: params});
      ref.closed.subscribe(result => {
        resolve(result);
      });
    });
  }

  snackbar(params: any) {
    this.messageService.set('wui:snackbar', params);
  }

  toggleDrawer() {
    this.messageService.set('wui:toggleDrawer', null);
  }

  openLoading() {
    this.loadingRef = this.rootDialog.open(LoadingDialogComponent, {disableClose: true});
  }

  closeLoading() {
    this.loadingRef.close();
  }

  actionSheet(params: any) {
    this.messageService.set('wui:action-sheet', params);
  }

}
