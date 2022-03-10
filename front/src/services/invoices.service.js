import axios from "axios";

const findAll=()=>{
    axios.get('http://localhost:8000/api/invoices')
        .then(res => console.log(res.data))
}

export{
    findAll
}