
fetch("http://localhost:8080/student/getAll",{
    method:'GET'
})
.then(data=>data.json())
.then(data=>{
    console.log(data)
    let studenyTbl=document.getElementById('studenyTbl')
    var studentList=`<tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>`
        data.forEach(element => {
            studentList+=`<tr>
                    <td><b>${element.name}</b></td>
                    <td><b>${element.age}</b></td>
                    <td><b>${element.address}</b></td>
                    <td><button class="btn btn-primary" onClick="viewStudent(${element.id})"><img src="assert/image/eye.png" width="25"></button></td>
                </tr>`
            
        });

        studenyTbl.innerHTML=studentList;
})

let myModal=document.getElementById('myModal')

function viewStudent(id){
    console.log(id)
    myModal.style.display = "block";
    fetch("http://localhost:8080/student/getStudentById?id="+id,{
        method:'GET'
    })
    .then(data=>data.json())
    .then(data=>{
        console.log(data)

        let name=document.getElementById('nameId')
        let age=document.getElementById('ageId')
        let address=document.getElementById('addresId')
        let imgId=document.getElementById('imgId')

        name.innerHTML=data.name;
        age.innerHTML=data.age;
        address.innerHTML=data.address
        imgId.src=data.image
    })

    

}
var span=document.getElementById('close')
    span.onclick= function(){
        myModal.style.display="none";
    }