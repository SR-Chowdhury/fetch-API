import '../styles/index.scss';

/**************************
* Bismillahir Rahmanir Rahim
* Fetch API
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/
// [Check Readme.md file for details]

// _ _ _ _ _ _ _ _ _ _ _Fetch API_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users`)
    .then((res) => {
        return res.json();
    })
    .then((res_data) => {
        // res_data.map(data => console.log(data.name));
        let x = res_data.map((data) => {
            let li = document.createElement('li');
            let text = `Name: ${data.name};   Phone: ${data.phone}`;
            let textNode = document.createTextNode(text);

            li.appendChild(textNode);

            return li;
        });
        x.forEach(element => {
            document.getElementById('ulId').appendChild(element);
        });
        
    })
    .catch((err) => {
        console.log(err);
    })