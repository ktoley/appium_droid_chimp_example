/**
 * Created by ToleyK on 8/28/2016.
 */
export class Selector {
//helper class to compose selector by resource ID
    constructor(resourcId_tail){ // regExpression to provide resource id for selector
        var this_selector = 'new UiSelector().resourceIdMatches(".*\\b'+resourcId_tail +'\\b.*")';
        this.selector = 'android=' + this_selector;
    }

    get str () {
        return this.selector;
    }
}