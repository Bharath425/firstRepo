import React from 'react';
import reactDom  from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import approvalCard from './ApprovalCard';
import ApprovalCard from './ApprovalCard';

const App = () =>{

    return(
            
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail author='Bharath' date='Today at 5:42PM' comment='Hi this is first Comment'/>
          </ApprovalCard>
          <CommentDetail author='sarsth' date='Today at 5:42PM' comment='Hi this is first Comment'/>
          <CommentDetail author='yuiop' date='Today at 5:42PM' comment='Hi this is first Comment'/>
          <CommentDetail author='vfghjk' date='Today at 5:42PM' comment='Hi this is first Comment'/>
          
        </div>
    );
};

reactDom.render(<App />, document.querySelector("#root"));