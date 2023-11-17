"use strict";
class DesktopDirectory {
    constructor() {
        this.config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-',
            }
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
console.log(Desktop.config);
const me = {
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina',
    hobbies: ['Building rockets']
};
me.code();
