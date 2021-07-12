import Navbar from "../Components/Nav-bar/Nav-bar";
import Header from "../Components/Header/Header";
import Message from "../Components/Message/Message";
import Adminbar from "../Components/Adminbar/Adminbar"

function MessagesPage(){

    
    return (
        <div>
            <Navbar />
            <Header />
            <Adminbar />
            <Message />
        </div>
    )
    
}

export default MessagesPage;