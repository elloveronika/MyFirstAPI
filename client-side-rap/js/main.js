document.querySelector('button').addEventListener('click' , getRapName)

async function getRapName(){
    const rapName = document.querySelector('input').value
    try{// this is our request to connect to the server
    const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)//once isgets data we are going to console log it
    const data = await res.json() // the promise is pending until we get get the awai
        document.querySelector('h2').innerText = data.birthName
        document.querySelector('h3').innerText = data.birthLocation
        document.querySelector('h4').innerText = data.age
        document.querySelector('#img').src = data.image
    console.log(data)
    }catch(err){
        console.log(err)
    }
}
async function deleteRapper(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteRapper' , {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},  
            body: JSON.stringify({
                'stageNameS' : sName,
                'birthName': bName,
            })    
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
