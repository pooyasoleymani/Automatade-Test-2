Feature: Signup New User

    Scenario: Successful Signup with valid Information
        Given user open the signup page
        When user enter valid email, firstname, lastname, birthdate, phone number, and password and confirm password
        And user click the "Sign Up" button
        Then Alert "Sign up successful!"
        And redirect user to login page

    Scenario: Unsuccessful Signup with unmatch password
        Given user open the signup page
        When user enter valid email, firstname, lastname, birthdate, phone number
        And user enter not match password and confirm password
        And user click the "Sign Up" button
        Then Alert "Passwords do not match!"

    Scenario: Unsuccessful Signup with invalid email
        Given user open the signup page
        When user enter email that does not contain "@" 
        And user enter firstname, lastname, birthdate, phone number, password and confirm password
        And user click the "Sign Up" button
        Then the email input field should display "Please include an @ in the email address"

    Scenario: Unsuccessful Signup with invalid phone number
        Given user open the signup page
        When user enter valid email, firstname, lastname, birthdate, and password
        And user enter invalid phone number
        And user click the "Sign Up" button
        Then the phone input field should display "Phone number is wrong!"
	
    Scenario: Unsuccessful Signup without firstname
        Given user open the signup page
        When user enter valid email, lastname, birthdate, phone number, and password
        And user click the "Sign Up" button
        Then the firstname input field should display "First name is required!"
    
    Scenario: Unsuccessful Signup without lastname
        Given user open the signup page
        When user enter valid email, firstname, birthdate, phone number, and password
        And user click the "Sign Up" button 
        Then the lastname input field should display "Last name is required!"

    Scenario: Unsuccessful Signup without birthdate
        Given user open the signup page
        When user enter valid email, firstname, lastname, phone number, and password
        And user click the "Sign Up" button 
        Then the birthdate input field should display "Birthdate is required!"

    Scenario: Unsuccessful Signup without password
        Given user open the signup page
        When user enter valid email, firstname, lastname, birthdate, and phone number
        And user click the "Sign Up" button
    
    Scenario: Unsuccessful Signup without confirm password
        Given user open the signup page
        When user enter valid email, firstname, lastname, birthdate, phone number, and password
        And user click the "Sign Up" button 
        Then the confirm password input field should display "Confirm password is required!"
        

