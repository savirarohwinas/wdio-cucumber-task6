const { $ } = require('@wdio/globals')

class PelangganPage {

    get menuPelanggan () {
        return $('a:nth-of-type(8) .css-1mqa38q')
    }
    get navigateToPelangganSection() {
      // Implement code to navigate to the "Pelanggan" section
    }
  
    get clickTambahButton() {
        return $('//a[.="tambah"]')
    }
  
    get enterNama()  {
        return $('#nama')
    }
  
    get enterNoHP()  {
        return $('[data="no.hp,,function () { [native code] }"]')
    }
  
    get enterAlamat()  {
        return $('#alamat')
    }
  
    get enterKeterangan()  {
        return $('#keterangan')
    }
  
    get clickSimpanButton() {
        return $('//input[@id="keterangan"]')
    }
  
    get SuccessMessage(){
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan(){
        return $('//*[contains(text(),"item ditambahkan")]')
    }
  
    get ErrorMessage() {
        return $('div[role="alert"]')
    }
  }
  
  module.exports = PelangganPage;
  