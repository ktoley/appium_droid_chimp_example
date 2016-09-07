/**
 * Created by ToleyK on 8/28/2016.
 */
import {Selector} from "../../support/helpers/selector.js";
export class SubmitScreen {

    constructor(cl) {
        //find element by resource IDs with Selector(id name).str
        //map found elements to this class
        this.cli = cl;

    }
    goToHome() {// restart this activity
        console.log('start .ShowTextActivity directly');
        this.cli.startActivity('com.example.android.testing.espresso.BasicSample',
            '.ShowTextActivity'
        );

        return this.cli;
    }

    fieldFinder(cli){
        //cheating find by text string the element has no id or description
        var selector = 'new UiSelector().text("Basic Espresso sample")';
        return cli.element('android=' + selector);
};
    get hello_field() {
        var helloText_field = this.cli.element(new Selector('show_text_view').str);
//console.log('yyyyy' + helloText_field.getText());
        return helloText_field;
    };

    get title_field() {
        var titleText_field = this.fieldFinder(this.cli);

        return titleText_field;
    };
}