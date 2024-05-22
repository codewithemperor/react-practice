import Header from './Header';
import Footer from './footer';
import Note from './note';
import notes from './Notes';

 

function App() {
    return(
        <div>
            <Header />
            {notes.map(not => <Note key={not.key} title={not.title} content={not.content.substring(0, 70) +"..."}/>)}
            
            <Footer />
        </div>
    )
}

export default App;