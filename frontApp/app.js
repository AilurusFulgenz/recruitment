'use strict';

const filteringRulesApp = angular.module('filteringRulesApp', []);

filteringRulesApp.controller('FilteringRulesListCtrl', function FilteringRulesListCtrl ($scope, $http) {
    $scope.filteringRules = [];
    $scope.newFilteringRule = {
        src: '0.0.0.0',
        dst: '0.0.0.0',
        port: 1
    };

    const filteringRulesEndpoint = 'filtering-rules/';

    $scope.getFilteringRules = () => {
        $http.get(filteringRulesEndpoint).then(response => {
            $scope.filteringRules = response.data;
        });
    };

    $scope.sendFilteringRule = data => {
        $http.post(filteringRulesEndpoint, data).then(response => {
            $scope.filteringRules = response.data;
        });
    };

    $scope.getFilteringRules();
});