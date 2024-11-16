Feature: Signup New User

    Scenario: Successful Signup with valid Information
        Given user open signup page
        When user enter valid email,firstname,lastname, birthdate,phone number and password and confirm password
        And user click the Sign Up button
        Then Alert "Sign up successful!"
        Then redirect user to login page

        
    Scenario: Unsuccessful Signup with unmatch password 
        Given user open the signup page 
        When user enter valid email,firstname,lastname, birthdate,phone number
        And user enter Not Match password and confirm password 
        And user click Sign Up button 
        Then Alert "Passwords do not match!"


    Scenario: Unsuccessful Signup with invalid email 
        Given user open the signup page 
        When user enter valid email,firstname,lastname, birthdate,phone number
        And user enter Not Match password and confirm password 
        And user click Sign Up button 
        Then in email input "Please include an @ in the email address"

    
    Scenario: Unsuccessful Signup with invalid phone number 
        Given user open the signup page 
        When user enter valid Information and invalid phone number
        And user click Sign Up button 
        Then Alert "phone Number is Wronge!"

    