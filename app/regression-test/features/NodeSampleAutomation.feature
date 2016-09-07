# Created by ToleyK at 8/18/2016
Feature: Node Sample Automation Code
  As an Android tester I want to see an example automated test.


#Scenario Outline: Submit open activity
 # Given  I open the results screen with default text
  #Then   Result is <eText>
  #And   Title is <mainTitle>

  #Examples:
   # | eText | mainTitle             |
    #| text  | Basic Espresso sample |
  @watch

  Scenario Outline: Type Text in to field
    Given I am in the app
    When  I have entered <eText>
    And   I submit the entry
    Then  <dText> should be displayed

    Examples:
      | eText   | dText |
      |  test   |  test |
 #     |  20     |  20   |

  Scenario Outline: Replicate Espresso Test
    Given I am in the app
    When  I have entered <eText>
    And   I Open Activity
    Then  Result is <dText>

    Examples:
      | eText   | dText |
      |  test   |  test |
 #     |  20     |  20   |



