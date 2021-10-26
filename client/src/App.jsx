import { Route } from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Todos} from "./components/Todos/Todos";

const App = () => {

    return (
        <div className="container">
            <Header/>
            <Route path='/todos' component={Todos}/>

        </div>
    )
}

export default App;
