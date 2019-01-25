import { NgModule } from '@angular/core';
import { WuiComponent } from './wui.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MessageService } from '../lib/services/message.service';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { TopBarComponent, TopBarItemComponent } from './components/top-bar/top-bar.component';
import { PageComponent } from './components/page/page.component';
import { DrawerComponent, DrawerItemComponent } from './components/drawer/drawer.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ModalComponent } from './components/modal/modal.component';
import { ListComponent } from './components/list/list.component';
import { WuiService } from './services/wui.service';
import { ContextMenuComponent, ContextMenuItemComponent } from './components/context-menu/context-menu.component';
import { ContextMenuDirective } from './directives/context-menu.directive';
import { GridComponent, GridColumnComponent } from './components/grid/grid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WuiComponent,
    SnackbarComponent,
    LoadingComponent,
    FormFieldComponent,
    AppComponent,
    TopBarComponent,
    TopBarItemComponent,
    PageComponent,
    DrawerComponent,
    DrawerItemComponent,
    DatepickerComponent,
    ModalComponent,
    ListComponent,
    ContextMenuComponent,
    ContextMenuItemComponent,
    ContextMenuDirective,
    GridComponent,
    GridColumnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WuiComponent,
    FormFieldComponent,
    AppComponent,
    DrawerComponent,
    DrawerItemComponent,
    PageComponent,
    TopBarComponent,
    TopBarItemComponent,
    LoadingComponent,
    ModalComponent,
    ContextMenuComponent,
    ContextMenuItemComponent,
    ContextMenuDirective,
    GridComponent,
    GridColumnComponent
  ]
})
export class WuiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WuiModule,
      providers: [
        MessageService,
        WuiService
      ]
    };
  }

}
