import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '.login.page';
import pelangganPage from '..pelanggan.page';

Given('I already login with email {string} and password {string}', async function (email, password) {
  await loginPage.open();
  await loginPage.inputEmail.setValue(email);
  await loginPage.inputPassword.setValue(password);
  await loginPage.loginButton.click();
});

Given('I am on the dashboard page', async () =>  {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
  await expect(loginPage.textKasirAja).toExist();
});

When('I click on menu Pelanggan', async () => {
  await pelangganPage.menuPelanggan.click();
});

When('I navigate to the "Pelanggan" section from the main menu',  async () => {
  await pelangganPage.navigateToPelangganSection(); 
});

When('I click on the "Tambah" button', async () => {
  await pelangganPage.clickTambahButton(); 
});

When('I enter {string} in the "Nama" field', async (nama) => {
  await pelangganPage.enterNama.setValue(nama); 
});

When('I enter {string} in the "no.HP" field', async (no_hp) => {
  await pelangganPage.enterNoHP.setValue(no_hp);
});

When('I provide {string} as the address in the "Alamat" field', async (alamat) => {
  await pelangganPage.enterAlamat.setValue(alamat);
});

When('I enter {string} in the "Keterangan" field', async (keterangan) => {
  await pelangganPage.enterKeterangan.setValue(keterangan);
});

When('I click the "Simpan" button', async () => {
  await pelangganPage.clickSimpanButton();
});

Then('I should see the success message displaying {string} on the screen', async (message) => {
  await expect(pelangganPage.successMessage()).toEqual(message); 
});

Then('I should see an error message saying {string}', async (errorMessage) => {
  await expect(pelangganPage.errorMessage()).toEqual(errorMessage);
});
