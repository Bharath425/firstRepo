import React from 'react';
import faker from 'faker';

const  ApprovalCard= (props)=>{
    return(
        
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <img class="right floated mini ui image" src={faker.image.avatar()}/>
                        <div class="header">
                            Elliot Fu
                        </div>
                        <div class="meta">
                          Friends of Veronika
                        </div>
                        <div class="description">
                           {props.children}
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons">
                                <div class="ui basic green button">Approve</div>
                                <div class="ui basic red button">Decline</div>
                                <div></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;