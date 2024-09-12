document.getElementById('btnAdd').
addEventListener('click',getGuardian);

function getGuardian(){
   
    let lblName=document.getElementById('lblName').value;
    let lblAddress=document.getElementById('lblAddress').value;
    let lblContact=document.getElementById('lblContact').value;

    let requestbody={
        "guardianName":lblName,
        "guardianAddress":lblAddress,
        "guardianContact":lblContact
    }
    console.log(requestbody)
    fetch("http://localhost:8080/guardian/save",{
        method:'POST',
        body:JSON.stringify(requestbody),
        headers:new Headers({"content-type":"application/json"})
    })
    .then(data => data.json())
    .then(data=>{
        console.log(data)
    })
   
}

