const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
var  database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let obj = {
        user: username,
        msg: message
    };
    database.push(obj);

}

// Set database "child_added" event listener here



database.on("child_added", addMessage);

const msgContainer = document.querySelector(".allMessages");


function addMessage(rowData){
    const row = rowData.val();
    const name  = row.user;
    const message = row.msg;

    const pElement = document.createElement("p");
    pElement.innerText = `${name}: ${message}`;

    msgContainer.appendChild(pElement);
}