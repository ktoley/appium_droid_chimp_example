/**
 * Created by ToleyK on 8/25/2016.
 */
import {Selector} from "../../support/helpers/selector.js";

export class HomeScreen {

    constructor(cl) {
        this.cli = cl;
        //find element by resource IDs with Selector(id name).str
        //map found elements to this class
          console.log('constructor - map UI');
    }

    goToHome() { // restart this activity
        console.log('start .MainActivity directly');
        this.cli.startActivity('com.example.android.testing.espresso.BasicSample',
            '.MainActivity'
        );
        return this.cli;
    }

    get input_field() {
        var inputText_field = this.cli.element(new Selector('editTextUserInput').str);
        return inputText_field;
    }

    get hello_field() {
        var helloText_field = this.cli.element(new Selector('textToBeChanged').str);
        return helloText_field;
    }

    get change_button() {
        var changeText_button = this.cli.element(new Selector('changeTextBt').str);
        return changeText_button;
    }

    get open_button() {
        var openActivity_button = this.cli.element(new Selector('activityChangeTextBtn').str);
        return openActivity_button;
    }

}
