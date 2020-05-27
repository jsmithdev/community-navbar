/*
* Left for example; Not a must;
*
*
*/

export const NAV_ITEMS = [
    {
        label: 'Home',
        path: '/',
        get id(){ return new Date().getTime() }
    },
    {
        label: 'Cases',
        path: '/recordlist/Case/Default',
        get id(){ return new Date().getTime() }
    },
]