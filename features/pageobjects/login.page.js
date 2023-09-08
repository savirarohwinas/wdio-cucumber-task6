const { $ } = require('@wdio/globals')
const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email')
    }
    
    get inputPassword () {
        return $('#password')
    }
    
    get loginButton () {
        return $('//button[@class="chakra-button css-1n8i4of"]')
    }

    get textKasirAja () {
        return $('//h3[@class="chakra-heading css-1wswht5"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
