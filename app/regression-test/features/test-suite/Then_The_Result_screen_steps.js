/**
 * Created by ToleyK on 8/28/2016.
 */
import {HomeScreen} from   "./support/page_objects/homescreen.js";
import {SubmitScreen} from "./support/page_objects/submitscreen.js";

module.exports = function() {

    this.Before(function () {
        "use strict";

        this.result = new SubmitScreen(client);
    });

    this.After(function () {
        "use strict";
      client.closeApp();
    });

    this.Given(/^I open the results screen with default text$/, function () {
        // Write the automation code here
           // this.result.goToHome();
           client.currentActivity().value.should.equal('.ShowTextActivity');

    });

    this.Then(/^Result is (.*)$/, function (eText) {
        // Write the automation code here

        this.result.hello_field.getText().should.equal(eText);

    });


    this.Given(/^Title is (.*)$/, function (eText) {
        // Write the automation code here
        this.result.title_field.getText().should.equal(eText);

    });


};