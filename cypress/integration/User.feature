Feature: User API

    Scenario: As an admin user I want to get details of all users so that I can see what users exist
        Given I have the GET users end point
        When I send a GET users request
        Then response status code equals 200
        And response body contains all users

