'use strict'

angular.module('core.vac').
	factory('Vac', ['$resource', 
		function($resource){
			return $resource ('json/:id.json', {}, {
				query: {
          			method: 'GET',
          			params: {id: 'vacancies'},
          			isArray: true
        		}
			})
		}
	])