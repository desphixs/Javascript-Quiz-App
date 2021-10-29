$(document).ready(function () {
	var square = $(".square");
	var resultArea = $(".result-area");
	resultArea.hide();
	square.hide();

	$("#okay").click(function () {
		var n = $("#rows-and-columns").val();
		if(n == 0)
		{
			$(".square").hide();
		}
		else
		{
			var row = $("<div class='div-border'></div>");
			square.text("");
			for(var i=0;i<n;i++)
			{
				var input = "";
				for(var j=0;j<n;j++)
				{
				input += "<input type='number' name='input' id='input"+[i+1][j+1]+"' placeholder='row"+[i+1]+"col"+[j+1]+"'>";
				}
				row.append(input);
				row.append("<br/>");
			}
			square.append(row);
			square.show();
		}
	});
});