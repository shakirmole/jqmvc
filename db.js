var db;
var database = 'carstock.db';

$( function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', database, true);
	xhr.responseType = 'arraybuffer';
	
	xhr.onload = function(e) {
		var uInt8Array = new Uint8Array(this.response);
		db = new SQL.Database(uInt8Array);
	};
	xhr.send();
})

function dbClass(table) {
	this.table = table;
    this.fetchRows = function(sql) {
		var contents = db.exec(sql);
		try{
			if (contents[0]) {
				var keys = contents[0].columns;
				var values = contents[0].values;
				var data = {};
				
				for (var r=0;r<values.length;r++) {
					var row = {}
					for (var i=0;i<keys.length;i++) {
						row[keys[i]] = values[r][i];
					}
					data[r] = row;
				}
			} else {
				data[0] = '';
			}
		}catch(e){
			
		}
		
		return data;
	};
}
// function fetchRows(sql) {
// var contents = db.exec(sql);
// var keys = contents[0].columns;
// var values = contents[0].values;
// var data = {};

// for (var r=0;r<values.length;r++) {
// var row = {}
// for (var i=0;i<keys.length;i++) {
// row[keys[i]] = values[r][i];
// }
// data[r] = row;
// }
// return data;
// }