import angular from 'angular';
import 'angular-ui-router';
import ContactController from './controllers/contact'


import Config from './config';

angular
    .module('app', ['ui.router'])
    .config(Config)
    .controller('ContactController', ContactController);
