import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageObjects/login.page';

Given('I am on the login page', async () => {
    await loginPage.open();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');
});

When('I input email as {string} and password as {string}', async function (email, password) {
    await loginPage.inputEmail.setValue(email); // Change "LoginPage" to "loginPage"
    await loginPage.inputPassword.setValue(password); // Change "LoginPage" to "loginPage"
});

When('I click on the login button', async () => {
    await loginPage.loginButton.click(); // Change "LoginPage" to "loginPage"
});

Then('I must navigate to the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(loginPage.textKasirAja).toExist(); // Change "LoginPage" to "loginPage"
});

