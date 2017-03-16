const SERVER_URL = "https://aqueous-thicket-71532.herokuapp.com";

function ContactController ($scope, $http, $stateParams){
  console.log("welcome to Contact Controller");
  $scope.currentContact = null;
  $scope.contacts = [];


  function init () {
    $http.get(`${SERVER_URL}/contacts`).then( resp =>  {
      $scope.contacts = resp.data;
    });
  }

  init();


  $scope.addContact = function (data){
    $http.post(`${SERVER_URL}/contacts`, data).then(resp => {
      console.log(resp.data);
      $scope.currentContact = resp.data;
      $scope.contacts.push(resp.data);
    });
  };

}

ContactController.$inject = ['$scope', '$http', '$stateParams'];

export default ContactController;
