//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//Components
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                text="Cowabunga dude!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                text="Gnarly!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                text="Far out!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

//Render Components
ReactDOM.render(<App />, document.querySelector('#root'));