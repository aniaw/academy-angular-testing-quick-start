Feature: Manage contacts

  Scenario: Create new contact
    When I browse to the "/"
    Then I should be directed to "/contacts"
    When I click "contacts.saveButton"
    Then I should see "John" in "tName" column in row "1" of "contacts.table" table
    Then I should see "john@john.pl" in "tEmail" column in row "1" of "contacts.table" table
    Then I should see "123456789" in "tPhone" column in row "1" of "contacts.table" table
