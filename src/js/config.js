
function Config ($stateProvider, $urlRouterProvider) {
   console.log($stateProvider);
   console.log($urlRouterProvider);


$stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.tpl.html',
      controller: 'ContactController'
    })

    .state('addContact', {
      url: '/addContact',
      templateUrl: 'templates/addContact.tpl.html',
      controller: 'ContactController'
    })

    .state('viewContacts', {
      url: '/contacts',
      templateUrl: 'templates/viewContacts.tpl.html',
      controller: 'ContactController'
    })

    .state('viewOneContact', {
      url: '/contacts/:id',
      templateUrl: 'templates/viewContacts.tpl.html',
      controller: 'ContactController'
    })


    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise("/home");
  };

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
