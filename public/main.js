// var updateData = function() {
// 	fetch('http://localhost:3000/quotes', {
// 		  method: 'put',
// 		  headers: {'Content-Type': 'application/json'},
// 		  body: JSON.stringify({
// 				'name': 'Fuck',
// 				'quote': 'you'
// 		  })
// 	});
// };

// var deleteData = function() {
// 	fetch('http://localhost:3000/quotes', {
// 		  method: 'delete',
// 		  headers: {'Content-Type': 'application/json'},
// 		  body: JSON.stringify({
// 				'name': '',
// 		  })
// 	});
// };
new Timesheet('timesheet', 2005, 2015, [
  ['07/2005', '09/20', 'A freaking awesome time', 'lorem'],
  ['06/2002', '09/2003', 'Some great memories', 'ipsum'],
  ['2003', 'Had very bad luck'],
  ['10/2003', '2006', 'At least had fun', 'dolor'],
  ['02/2005', '05/2006', 'Enjoyed those times as well', 'ipsum'],
  ['07/2005', '09/2005', 'Bad luck again', 'default'],
  ['10/2005', '2008', 'For a long time nothing happened', 'dolor'],
  ['01/2008', '05/2009', 'LOST Season #4', 'lorem'],
  ['01/2009', '05/2009', 'LOST Season #4', 'lorem'],
  ['02/2010', '05/2010', 'LOST Season #5', 'lorem'],
  ['09/2008', '06/2015', 'FRINGE #1 & #2', 'ipsum']
]);