function createTable() {
 document.getElementById('tb_container').innerHTML = "" ;
    var rows  = document.getElementById('tb_rows').value;
     var cols  = document.getElementById('tb_cols').value;
 
    tblHtml = '<form method="post">'+'<table>'
    for (i=0; i<rows; i +=1 ) {
        tblHtml += '<tr>';
        for (j=0; j<cols; j +=1 ) {
         tblHtml += '<td> <INPUT TYPE="TEXT" NAME="name" SIZE="20" placeholder="content"></td>';
        }
          tblHtml += '</tr>';
    }
    tblHtml += '<hr>'+'<h3>'+'Please add data respectively to the table'
    +'</h3>'+'<h4>'+'<span>'+'NB:'+'</span>'
    +'The first row is the content header'+'</h4>'+'</table>'+'</form>'+'<a id="savefile" class="success button" href="#">Save File</a>';
    document.getElementById('tb_container').innerHTML = tblHtml;
   

	$('#savefile').click(function () {
	alert("file saved");
});
}





