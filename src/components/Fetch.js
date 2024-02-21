const PROTOCOL = "http";
const IP = "127.0.0.1";
const PORT = 9001;


async function Fetch(path, method) {
    const url = PROTOCOL + "://" + IP + ":" + PORT + "/" + path; 
    console.log(url);
    const res = await fetch(url, {
        method: method,
        mode: 'cors',  
        site: 'cross-site',
        'cache' : 'no-cache',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers' : 'Accept, Content-Type, origin',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'API-KEY': 'MedHead-PassWord+250.'
        },
    });
    const result = await res.json();
    //console.log(result);
    return result;
}

export default Fetch;

