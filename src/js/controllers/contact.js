const SERVER_URL = "https://aqueous-thicket-71532.herokuapp.com";

function ContactController ($scope, $http){
  console.log("welcome to Contact Controller");
  $scope.currentContact = null;
  $scope.contacts = [];


  function init () {
    $http.get(`${SERVER_URL}/contacts`).then( resp =>  {
      $scope.contacts = resp.data;
      console.log($scope.contacts)
    });
  }

  init();


  $scope.addShelter = function (data){
    $http.post(`${SERVER_URL}/contacts`).then(resp => {
      console.log(resp.data);
      $scope.currentContact = resp.data;
    });
  };
}

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
