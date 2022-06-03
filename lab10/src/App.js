import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Stories from './Stories';
import Posts from './Posts';


class App extends React.Component {  

    render () {
        return (
            <div>

            <Navbar title="Photo App" />

            <aside>
                <Profile />
                <Suggestions />
            </aside>

            <main className="content">
                <Stories />
                <Posts />
            </main>

            </div>
        );
    }
}

export default App;