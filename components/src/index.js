import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div class="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>                
            </ApprovalCard>
            <ApprovalCard>
            <    CommentDetail author="Sam" timeAgo="Today at 4:00AM" cText="Nice blog post!" cImage={faker.image.image()}/>
            </ApprovalCard>     
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 5:00AM" cText="Nice blog post!" cImage={faker.image.image()}/>
            </ApprovalCard>  
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 4:00AM" cText="Not nice" cImage={faker.image.image()}/>
            </ApprovalCard>     
            
            
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))