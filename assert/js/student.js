

fetch("http://localhost:8080/guardian/getNames",{
    method:'GET'

})
.then(data => data.json())
.then(data=>{
   var guardianList="<option><b><-Select Guardian-></b></option>";
    data.forEach(element => {
        guardianList+=`<option><b>${element}</b></option>`
    });

    var guardianDropdown=document.getElementById('guardianDropdown')
        guardianDropdown.innerHTML=guardianList

    
})

document.getElementById('imgFile')
.addEventListener('change',function(){
    var studentImage= document.getElementById('studentImage');
    studentImage.src=URL.createObjectURL(this.files[0])
    console.log(this)
});

document.getElementById('btnRegister')
.addEventListener('click',addStudent);

function addStudent(){
    console.log("sdafsdf")
    let txtName=document.getElementById('txtName').value;
    let txtAge=document.getElementById('txtAge').value;
    let txtContact=document.getElementById('txtContact').value;
    let guardianDropdown=document.getElementById('guardianDropdown').value;
    let fileInput=document.getElementById('imgFile');
    var selectedFile=fileInput.files[0];
    let imageResult="";
    var reader = new FileReader();
    reader.onloadend = function() {
        imageResult=reader.result;
        let requestbody={
            "name":txtName,
            "age":txtAge,
            "contact":txtContact,
            "guardianName":guardianDropdown,
            "image":imageResult
        }
        fetch("http://localhost:8080/student/save",{
            method:'POST',
            body:JSON.stringify(requestbody),
            headers:new Headers({"content-type":"application/json"})
        })
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
        })
    }
    reader.readAsDataURL(selectedFile);


    
}

