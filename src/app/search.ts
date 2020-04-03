import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'Search'
    // https://mytechnetknowhows.wordpress.com/2017/02/18/angular-2-pipes-passing-multiple-filters-to-pipes/
})
export class SearchPipe implements PipeTransform {
    transform(items: Array<any>, status: string, date: string) {
        if (items && items.length) {
            return items.filter(item => {
                if (status && item.alertstatus.toLowerCase().indexOf(status.toLowerCase()) === -1) {
                    return false;
                }
                if (date && item.time.toLowerCase().indexOf(date.toLowerCase()) === -1) {
                    return false;
                }
                return true;
           });
        } else {
            return items;
        }
    }}
 
