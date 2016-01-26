var appx = angular.module('myapp',[]);

appx.controller('orderctrl',function($scope){
  $scope.services=[
    {
      name : Mathematics,
      price : 50,
      active : true
    },
    {
      name : English,
      price : 150,
      active : false
    },
    {
      name : Social,
      price : 70,
      active : false
    },
    {
      name : Science,
      price : 90,
      active : false
    }
  ];

  $scope.activetab=function(x){
    x.active=!x.active;
  };

  $scope.total=function(){
    var total=0;
    angular.forEach($scope.services ,function(x){
      if(x.active){
        total += price;
      }
    });
    return total;
  };
});
