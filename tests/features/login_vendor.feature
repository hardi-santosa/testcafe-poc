Feature: Login Vendor

  @login
  Scenario: As a vendor, I should be able to login at bizzy platform
    Given User is at login page vendor bizzy
    When User input name "hardi.vendor.pkp.admin@yopmail.com" and password "bizzy123" at login page vendor
    Then User will see dashboard vendor "PT PANSA PKP (Persero) Tbk"
