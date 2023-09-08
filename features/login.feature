Feature: Login Kasir Aja

  Scenario Outline: As a Admin, I can log into the Dashboard KasirAja

    Given I am on the login page
    When I login with <username> and <password>
    Then I should navigate to dashboard page 

    Examples:
      | username                 | password | 
      | savirarohwina47@mail.com | 123      |

