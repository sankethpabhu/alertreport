import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SearchPipe } from './search.pipe';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Timeline.js';
import '@ui5/webcomponents/dist/TimelineItem.js';
import '@ui5/webcomponents-icons/dist/icons/search.js';
import '@ui5/webcomponents-icons/dist/icons/forward.js';
import '@ui5/webcomponents-icons/dist/icons/history.js';
import '@ui5/webcomponents-icons/dist/icons/action.js';
import '@ui5/webcomponents-icons/dist/icons/notes.js';
import '@ui5/webcomponents-icons/dist/icons/inspection.js';
import '@ui5/webcomponents-icons/dist/icons/suitcase.js';
import '@ui5/webcomponents/dist/Select';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Option';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '@ui5/webcomponents/dist/CustomListItem.js';
import '@ui5/webcomponents-icons/dist/icons/nav-back';
import '@ui5/webcomponents/dist/json-imports/i18n.js';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HistoryComponent } from './history/history.component';
import { SearchPipe } from './search';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
