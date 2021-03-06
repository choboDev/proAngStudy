angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function($scope, $http, dataUrl){

    //$scope.data={
    //    products: [
    //        {name: "Product #1", description: "A product", category: "Category #1", price: 100},
    //        {name: "Product #2", description: "B product", category: "Category #2", price: 200},
    //        {name: "Product #3", description: "C product", category: "Category #3", price: 300},
    //        {name: "Product #4", description: "D product", category: "Category #4", price: 400}
    //    ]
    //};
    $scope.data={ };

    $http.get(dataUrl)
        .success(function(data){
            $scope.data.products=data;
        })
        .error(function(error){
            $scope.data.error=error;
        });

});