import { LightningElement, track, api } from 'lwc';

import {
    NAV_ITEMS,
} from './navItems'

export default class CustomPortalNavigation extends LightningElement {
    
    @api defaultItems;

    @track items = []

    connectedCallback(){
        console.log('this.defaultItems =>')
        console.log(JSON.parse(JSON.stringify({default: this.defaultItems})))
        //if(this.defaultItems){
            this.items = this.defaultItems
        //}
        //else {
        //    this.items = NAV_ITEMS
        //}
    }

    navigate(event){
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: {
                menuItemId : event.target.name
            }
        }))
    }
}