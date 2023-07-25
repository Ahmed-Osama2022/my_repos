/**
 * Global Variables
 */

const footerYear = document.getElementById('footer-year');
const gallery = document.getElementById('gallery');


/**
 * End Global Variables
 */



/**
 * Start helper functions
 */

// Update the footer year 
let date = new Date();
let year = date.getFullYear();

footerYear.innerHTML = `&copy;${year} All Rights Reserved`;



// Geeting the data from GITHUB API
let myRepoApiLink = 'https://api.github.com/users/Ahmed-Osama2022/repos';
async function fetchData() {
    try {
        let myData = await fetch(myRepoApiLink);
        const myDataJson = await myData.json();

        for (let i = 0; i < myDataJson.length; i++) {
            // Creating the cards for the REPOS
            const myCard = document.createElement('div');
            const repoName = document.createElement('h3');
            const repoLink = document.createElement('a');

            myCard.setAttribute('class', 'card');
            // console.log(myCard);
            myCard.appendChild(repoName);
            myCard.appendChild(repoLink);

            repoName.textContent = `${i} ${myDataJson[i].name}`;
            repoLink.href = myDataJson[i].html_url;
            repoLink.setAttribute('target', '_blank');
            repoLink.textContent = myDataJson[i].name;
            // =============== ============ =========
            gallery.appendChild(myCard);

        }
    } catch (reason) {
        console.log(`Reason: ${reason}`);
    } finally {
        // console.log("After Fetch");
        console.log("Done Fetch");
    }
}

fetchData();



/**
 * End helper functions
 */

