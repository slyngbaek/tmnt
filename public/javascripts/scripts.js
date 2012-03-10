$(document).ready(function (){

	/********\
	| Node 1 |
	\********/

	$.post('/data', { node: 1, temp: true }, function(results){

		var pens = [ [], [], [], [] ];
		var curPen = 0;
		$.each(results, function(index, value){
			if (value.pen_num !== curPen)
				curPen++;
			pens[curPen].push(value);
		});

		/**
		 * Pen 1 Status:
		 * Set the icon and temp and nodes;
		 */
		if (curPen == 3) {
			var content = '<div class="row-fluid">';
			$.each(pens, function(index, value){
				if (pens[index][0].t3 >= 25 && pens[index][0].t3 <= 35) {
					content += '<div class="span3" align="center">Pen ' + index + '<button class="btn btn-success">' + Math.round(pens[0][0].t3*100)/100 + '&deg;C</button></div>';
				}
				else {
					content += '<div class="span3" align="center">Pen ' + index + '<button class="btn btn-danger">' + pens[0][0].t3 + ' &deg;C</button></p>';
					$('#node1-status button').attr('class', 'btn btn-danger');
					$('#node1-status button').html('Status Bad');
				}
			});
			content += '</div>';
			$('#node1-status p').html('Last updated at: <b>' + pens[0][0].timestamp + '</b>');
			var node1 = {
				trigger: 'hover',
				placement: 'bottom',
				title: 'Node 1 Status',
				content: content
			}
			$('#node1-status').popover(node1);
		}
		else {
			$('#node2-status p').html('No Data Found');
		}

		// Node 1: Pen 0
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n1p0t',
		  data: pens[0],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false,
		});

		// Node 1: Pen 1
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n1p1t',
		  data: pens[1],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});

		// Node 1: Pen 2
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n1p2t',
		  data: pens[2],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});

		// Node 1: Pen 3
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n1p3t',
		  data: pens[3],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});
	});

	$.post('./data', { node: 1, temp: false }, function(results){

		var h = []
		  , l = [];
		$.each(results, function(index, value){
			l.push({
				timestamp: value.timestamp,
				l0: value.light0,
				l1: value.light1
			});
			h.push({
				timestamp: value.timestamp,
				h: value.humidity
			});
		});

		// Node 1 Humidity readings
		Morris.Line({
		  element: 'n1l',
		  data: l,
		  xkey: 'timestamp',
		  ykeys: ['l0', 'l1'],
		  labels: ['Light 0', 'Light 1'],
		  parseTime: false,
		});

		// Node 1 Temperature Readings
		Morris.Line({
		  element: 'n1h',
		  data: h,
		  xkey: 'timestamp',
		  ykeys: ['h'],
		  labels: ['Humidity'],
		  parseTime: false
		});
	});

	/********\
	| Node 2 |
	\********/

	$.post('/data', { node: 2, temp: true }, function(results){

		var pens = [ [], [], [], [] ];
		var curPen = 0;
		$.each(results, function(index, value){
			if (value.pen_num !== curPen)
				curPen++;
			pens[curPen].push(value);
		});

		/**
		 * Pen 2 Status:
		 * Set the icon and temp and nodes;
		 */
		if (curPen == 3) {
			var content = '<div class="row-fluid">';
			$.each(pens, function(index, value){
				if (pens[index][0].t3 >= 25 && pens[index][0].t3 <= 35) {
					content += '<div class="span3" align="center">Pen ' + index + '<button class="btn btn-success">' + Math.round(pens[0][0].t3*100)/100 + '&deg;C</button></div>';
				}
				else {
					content += '<div class="span3" align="center">Pen ' + index + '<button class="btn btn-danger">' + pens[0][0].t3 + ' &deg;C</button></p>';
					$('#node2-status button').attr('class', 'btn btn-danger');
					$('#node2-status button').html('Status Bad');
				}
			});
			content += '</div>';
			$('#node2-status p').html('Last updated at: ' + pens[0][0].timestamp);
			var node1 = {
				trigger: 'hover',
				placement: 'bottom',
				title: 'Node 2 Status',
				content: content
			}
			$('#node2-status').popover(node1);
		}
		else {
			$('#node2-status p').html('No Data Found');
		}

		// Node 1: Pen 0
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n2p0t',
		  data: pens[0],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false,
		});

		// Node 1: Pen 1
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n2p1t',
		  data: pens[1],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});

		// Node 1: Pen 2
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n2p2t',
		  data: pens[2],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});

		// Node 1: Pen 3
		// Node 0 Temerperature readings
		Morris.Line({
		  element: 'n2p3t',
		  data: pens[3],
		  xkey: 'timestamp',
		  ykeys: ['t0', 't1', 't2', 't3'],
		  labels: ['T0', 'T1', 'T2', 'T3'],
		  parseTime: false
		});
	});

	$.post('./data', { node: 2, temp: false }, function(results){

		var h = []
		  , l = [];
		$.each(results, function(index, value){
			l.push({
				timestamp: value.timestamp,
				l0: value.light0,
				l1: value.light1
			});
			h.push({
				timestamp: value.timestamp,
				h: value.humidity
			});
		});

		// Node 1 Humidity readings
		Morris.Line({
		  element: 'n2l',
		  data: l,
		  xkey: 'timestamp',
		  ykeys: ['l0', 'l1'],
		  labels: ['Light 0', 'Light 1'],
		  parseTime: false,
		});

		// Node 1 Temperature Readings
		Morris.Line({
		  element: 'n2h',
		  data: h,
		  xkey: 'timestamp',
		  ykeys: ['h'],
		  labels: ['Humidity'],
		  parseTime: false
		});
	});
});