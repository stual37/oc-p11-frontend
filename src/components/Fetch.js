async function Fetch(url, methode) {
    console.log(url);
   const res = await fetch(url, {
        method: methode,
        mode: 'cors',  
        site: 'cross-site',
        'cache' : 'no-cache',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000',
            'Access-Control-Allow-Headers' : 'Accept, Content-Type, origin',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'no-cors'
        },
    });
    const result = await res.json();
    console.log(result);
    return result;
}

export default Fetch;
