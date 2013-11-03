describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should be publicly accessible and default route to be /', function() {
        expect(browser().location().path()).toBe("/");
    });

    it("should have tag h1 with text 'Welcome to Chitter!'", function() {
        expect(element("h2").text()).toEqual("Sign up for Chitter");
    });
});