describe('Upon launching app, a user', function() {

  beforeEach(function(){
    var ptor = protractor.getInstance();
    ptor.waitForAngular();

    browser.get('/');
  });

  it('can navigate to feed page', function(){
    expect(element(by.id('test')).isPresent()).toBe(true);  
  });

});