Feature: Add Pelanggan

  Scenario Outline: As a admin, I Can Add Customer with All Valid Data

    Given the user already login
    Given the user is on the dashboard page
    
    When the user navigates and click to the "Pelanggan" section from the main menu in dashboard
    And the user clicks on the "Tambah" button
    And the user inputs <nama> into the "Nama" field
    And the user inputs <no_hp> into the "no.HP" field
    And the user provides the customer's address <alamat> in the "Alamat" field
    And the user enters relevant information <keterangan> in the "Keterangan" field
    And the user clicks the "Simpan" Save button
    
    Then the user should see success message <message> displayed on the screen


    Examples:
      | email                  | password |nama   | no_hp        | alamat            | keterangan      | message                                               |
      | savirarohwina@mail.com | 123      | Sarah | 082112345678 | margahayu bandung | pelanggan tetap | Success Item ditambahkan                              |
    
Scenario Outline: As a admin, Unable to Add Customer with Non-Numeric Phone Number

    Given the user already login
    Given the user is on the dashboard page
    
    When the user navigates and click to the "Pelanggan" section from the main menu in dashboard
    And the user clicks on the "Tambah" button
    And the user inputs <nama> into the "Nama" field
    And the user inputs <no_hp> into the "no.HP" field
    And the user provides the customer's address <alamat> in the "Alamat" field
    And the user enters relevant information <keterangan> in the "Keterangan" field
    And the user clicks the "Simpan" Save button
    
    Then the user should see error message <errorMessage> displayed on the screen

 Examples:
      | email                  | password |nama   | no_hp        | alamat            | keterangan      | errorMessage                                               |
      | savirarohwina@mail.com | 123      | Sarah | abcd         | margahayu bandung | pelanggan tetap | Error message"phone" must be a number" is displayed.  |