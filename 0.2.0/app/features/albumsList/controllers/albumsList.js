'use strict';

angular.module('Albums.albumsList',['services.config']).controller('AlbumsListCtrl', function ($scope, albumsData,configuration) {
    $scope.albums = albumsData;
    $scope.config = configuration.foo;
});