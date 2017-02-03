/**
 * This file contains the JavaScript code for common functions that many pages could use.
**/

/***************************** BUILD TABLE **************************************
*-------------------------------------------------------------------------------*
*	This function builds and outputs a bootstrap table as a string.	The table	*
*	headers, and table data are passed as arguments to the function.			*
********************************************************************************/
function buildTable(headers, rows){
	/*	Uncomment for debug info
	console.log("Table headers:");
	console.log(headers);
	console.log("Table rows");
	console.log(rows);
	*/
	
	var tableHtml = "";														// This be where we buildin the table
	tableHtml += "<table class='table table-bordered table-hover table-sm'>"
	tableHtml += "<thead class='thead-inverse'><tr>";
	$.each(headers, function(key, value){									// Iterate over each header
		tableHtml += "<th>" + value + "</th>";								// Build the header tags and values...
	});					
	tableHtml += "</tr></thead><tbody>";									// Close up the head, start the body
	$.each(rows, function(key, value){										// Iterate over each row of data
		tableHtml += "<tr>";												// New row - build it
		$.each(value, function(key, value){									// Iterate over each data field in the row
			tableHtml += "<td>" + value + "</td>";							// Got a field in the row - <td> it
		});					
		tableHtml += "</tr>";												// Row's done - end it
	});					
	tableHtml += "</tbody></table>";										// Should be good, end the body and table
	return tableHtml;														// Aaaand done. Return the complete HTML string
}


/******************************** NOTIFY ****************************************
*-------------------------------------------------------------------------------*
*	This function takes a message and a bootstrap message level, and displays	*
*	a notification banner across the top of the viewport.						*
********************************************************************************/
function notify(m, l){
	/*var s = '<div class="alert alert-'+l+' alert-dismissible show" role="alert">';
	s += 		'<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
	s += 			'<span aria-hidden="true">&times;</span>';
	s += 		'</button>';
	s += 		m;
	s += 	'</div>';
	$("#notify").html(s)*/
	if (l == "danger")
		l = "error";
	$.notify(
		m,
		{position: "right bottom", className: l}
	);
}