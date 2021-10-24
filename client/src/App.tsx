import {FC} from 'react';
import { Route } from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Todos} from "./components/Todos/Todos";

const App: FC = () => {

    return (
        <div className="container">
            <Header/>
            <Route path='/todos' component={Todos}/>

        </div>
    )
}

export default App;
