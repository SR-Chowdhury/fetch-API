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

fetch(`${BASE_URL}/todos/1`)
    .then((res) => {
        return res.json();
    })
    .then((res_data) => {
        console.log(res_data);
    })
    .catch((err) => {
        console.log(err);
    })