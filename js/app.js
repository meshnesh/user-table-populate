function createTable() {
 document.getElementById('tb_container').innerHTML = "" ;
    var rows  = document.getElementById('tb_rows').value;
     var cols  = document.getElementById('tb_cols').value;
 
    tblHtml = '<form method="post">'+'<table>'
    for (i=0; i<rows; i +=1 ) {
        tblHtml += '<tr>';
        for (j=0; j<cols; j +=1 ) {
         tblHtml += '<td> <input id="content" type="number" placeholder="content" name="value"></td>';
        }
          tblHtml += '</tr>';
    }
    tblHtml += '<hr>'+'<h3>'+'Please add data respectively to the table'
    +'</h3>'+'<h4>'+'<span>'+'NB:'+'</span>'
    +'The first row is the content header'+'</h4>'+'</table>'+'<a id="savefile" class="success button" href="#">Save File</a>'+'</form>';
    document.getElementById('tb_container').innerHTML = tblHtml;
   

	$('#savefile').on('click',function(){
console.log("file saved");
  
    // if ( document.getElementById("content").content === " ") {
    // 	console.log('Cannot be empty');
    // }else {
       
    //    console.log("file saved");
    // }
});
	
		

	
}







