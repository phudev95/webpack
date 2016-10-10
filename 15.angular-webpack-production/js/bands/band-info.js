module.exports = function (app) {
    app.directive('bandInfo', ['bandList', function (bandList) {
        return {
            template: require('./band-info.html'),
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                console.warn(bandList);
                $scope.bands = bandList;
            }]
        }
    }])
};