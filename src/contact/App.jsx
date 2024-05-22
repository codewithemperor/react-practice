import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}

        />
    );
}

function App() {
    return (
        <div className="body">
            <h1 className="heading">My Contacts</h1>
            <Avatar img="chrome-extension://dhoenijjpgpeimemopealfcbiecgceod/assets/logo-OYJ34ERC.png" />

           {contacts.map(createCard)}

        </div>
        
    )
}

export default App;
export {createCard}