angular.module("whatapop").filter("filteredLocation",[ "$filter", function ($filter) {
    return function (arrayToFilter, arrayFilter, seller, element) {
        if(arrayFilter) {
            return $filter("filter")(arrayToFilter, function(listItem) {
                return arrayFilter.indexOf(listItem.seller[element]) !== -1;
            });
        }
    };
}]);