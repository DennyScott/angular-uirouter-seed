describe('Testing Controller', function() {

	// load the controller's module
	beforeEach(module('kioskApp'));

	var $scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$controller('MainCtrl', {
			$scope: $scope
		});
	}));

	it('Testing the test function', function() {
		expect(2).toBe(2);
	});

});