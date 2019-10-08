
google.setOnLoadCallback(function () {    
    angular.bootstrap(document.body, ['my-app']);
});

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
