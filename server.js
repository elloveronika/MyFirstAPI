const express = require('express')
const { response } = require('express')
const app = express()
const cors = require('cors')// download the cors package and now use it
const { url } = require('inspector')
const PORT = 8000




app.use(cors())



let rappers = { 
    'shaheed': {
        'age': 50,
        'birthName': 'Ali Shaheed Muhammad',
        'birthLocation': 'Bedford-Stuyvesant, New York, NY'
    },
    'phife dawg': {
        'age': 50,
        'birthName': 'Malik Izaak Taylor',
        'birthLocation': 'St. Albans, New York, NY'

    },
    'q-tip': {
        'age': 50,
        'birthName': 'Kamaal Ibn Fareed',
        'birthLocation': 'Harlem, New York, NY',
        'image' : ('https://i.pinimg.com/originals/28/7e/8d/287e8db49635230897545c5101c65b7d.jpg')
    },
    'jarobi': {
        'age': 49,
        'birthName': 'Jarobi White',
        'birthLocation': 'St, Albans, New York, NY'
        
    },
    'unknown': {
        'age': 1,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')//wherever the server file is look for the html file
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['jarobi'])
    }
    
})


app.listen(PORT, () => {
    console.log(`Server runninng on ${PORT}`)
})