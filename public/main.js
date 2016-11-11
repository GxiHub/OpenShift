var updateData = function() {
	fetch('http://localhost:3000/quotes', {
		  method: 'put',
		  headers: {'Content-Type': 'application/json'},
		  body: JSON.stringify({
				'name': 'Fuck',
				'quote': 'you'
		  })
	});
};

var deleteData = function() {
	fetch('http://localhost:3000/quotes', {
		  method: 'delete',
		  headers: {'Content-Type': 'application/json'},
		  body: JSON.stringify({
				'name': '',
		  })
	});
};