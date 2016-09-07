/**
 * Created by ToleyK on 8/27/2016.
 */

import {HomeScreen} from "./support/page_objects/homescreen.js";
import {Selector} from "./support/helpers/selector.js";

module.exports = function() {

    this.Before(function() {
        "use strict";
        this.home = new HomeScreen(client);
    });

    this.After(function(){
        "use strict";
        client.closeApp();
    });

    this.Given(/^I am in the app$/, function () {
        // Write the automation code here
       this.home.goToHome();
        client.currentActivity().value.should.equal('.MainActivity');
    });

    this.When(/^I have entered (.*)$/, function (eText) {
        // Write the automation code here
        this.home.input_field.keys(eText);
        this.home.input_field.getText().should.equal(eText);

    });

    this.Given(/^I submit the entry$/, function () {
        // Write the automation code here
        this.home.change_button.click();

    });

    this.Given(/^I Open Activity$/, function () {
        // Write the automation code here
        this.home.open_button.click();
    });

    this.Then(/^(.*) should be displayed$/, function (dText) {
        // Write the automation code here
        this.home.hello_field.getText().should.equal(dText);
    });
};