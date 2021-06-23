var studentData=[];
var operation="Add";
var EditIndex;
function handleData(){
var data={ 
"Name":document.getElementById('name').value,
"Age":document.getElementById('age').value,
"Email":document.getElementById('emailid').value
};
if(operation==="Add"){
studentData.push(data);
CreateRow();
}
else if(operation==="Update"){
 UpdateData(data,EditIndex);
}
document.getElementById("dataForm").reset();
}
function CreateRow(){
var table=document.getElementById('table');
var tableRow=document.createElement('tr');
var rowData=["Name","Age","Email","Edit","Delete"];
rowData.forEach(function(data){
 var Element=document.createElement('td');
 if(data==="Edit" || data==="Delete"){
 var Button=document.createElement('button');
 Button.innerText=data;
 Button.id=data+studentData.length;
 Element.appendChild(Button);
 }
 else{
 Element.innerText=studentData[studentData.length-1][data];
 }
 Element.style="border: 2px solid;text-align:center;padding:20px;";
 tableRow.appendChild(Element);
});
table.appendChild(tableRow);
 document.getElementById("Edit"+studentData.length).onclick=function(){EditData(this.parentNode.parentNode.rowIndex)};
 document.getElementById("Delete"+studentData.length).onclick=function(){DeleteData(this.parentNode.parentNode.rowIndex)};
}
function EditData(index)
{
operation="Update";
EditIndex=index-1;
document.getElementById('name').value=studentData[EditIndex].Name;
document.getElementById('age').value=studentData[EditIndex].Age;
document.getElementById('emailid').value=studentData[EditIndex].Email;
}
function UpdateData(data,index){
var rowData=["Name","Age","Email"];
for(i=0;i<3;i++){
studentData[index][rowData[i]]=data[rowData[i]];
document.getElementById('table').rows[index+1].cells[i].innerText=studentData[index][rowData[i]];
}
operation="Add";
}
function DeleteData(index){
	var answer=prompt("Are you sure you want to delete Row"+(index)+" ?");
	if(answer==="Yes"||answer==="yes"){
		studentData.splice((index-1),1);
		//console.log(studentData);
		document.getElementById('table').deleteRow(index);
		//console.log(document.getElementById('table').rows);
	}
	
}