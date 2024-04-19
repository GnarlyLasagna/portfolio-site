
export default function initCloudCounter() {

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://edportfoliofuncpy.azurewebsites.net/api/HttpTrigger'

const getVisitCount = () => {
    let count = 0
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log(response.count)
        count = response.count;

//        document.getElementById("cloud-counter").innerText = `This page has been visited ${count} times`;
        const element = document.getElementById("cloud-counter");

// Modify the text inside the element
        element.innerText = `This page has been visited ${count} times`;

// Add a class to the element
        element.classList.add("your-class-name");
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

}
