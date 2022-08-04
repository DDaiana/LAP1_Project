const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test('navbar shows MUSE', () => {
        // throw 'not implemented'
        let muse = document.querySelector('.navbar-brand');
        expect(muse.textContent).toContain('MUSE');

    }),

    test('navbar shows Sign Up', () => {
        // throw 'not implemented'
        let signup = document.querySelector('.btn-primary');
        expect(signup.textContent).toContain('Sign Up');

    }),

    test('header exists', () => {
        throw 'not implemented'

    })
})