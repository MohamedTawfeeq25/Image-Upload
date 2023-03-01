function load(){
	var file=document.getElementById('file').files[0];
	
	var Reader=new FileReader();
	if(file.type=="image/jpeg" || file.type=="image/png"){
		Reader.onload=()=>{
		
	
		var a=document.createElement('img');
		a.src=Reader.result;
		document.getElementById('data').appendChild(a);
		document.getElementById('a').textContent=file.name;
		document.getElementById('b').textContent=file.size;
		document.getElementById('c').textContent=file.type;
		document.getElementById('d').textContent=file.lastModifiedDate;

		
	}
	Reader.readAsDataURL(file);
	}
	else{
		alert('upload only jpeg and png images');
	}
}