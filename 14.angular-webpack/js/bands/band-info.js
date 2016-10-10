module.exports = function (app) {
    app.directive('bandInfo', function (bandList) {
        return {
            template: require('./band-info.html'),
            restrict: 'E',
            controller: function ($scope) {
                console.warn(bandList);
                $scope.bands = bandList;
            }
        }
    })
};