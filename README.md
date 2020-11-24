# WajekUi

Wajek UI adalah sebuah user interface pack yang dibuat khusus untuk membantu developer mengembangkan aplikasi berbasis desktop, web ataupun mobile dengan framework angular

## Instalasi

```
npm install @wajek/wui --save
```

## Setup

```
....
import { WuiModule } from '@wajek/wui';

@NgModule({
  ....
  imports: [
    ....
    WuiModule.forRoot()
  ]
  ....
});

....
```

### Add Style

open your projects's `style.scss` and import wui scss file

```
@import '~@wajek/wui/scss/wui.scss';
```