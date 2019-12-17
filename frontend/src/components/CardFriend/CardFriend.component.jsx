import React from 'react';
import { Wrapper, CardFriend, CardFriendThumb, CardFriendProfile } from './CardFriend.styled';


const CardFriends = ({ imageThumb, avatar })=>{
    return (
        <Wrapper>
            <CardFriend>
                <CardFriendThumb thumb={ imageThumb }>
                    <img src={ avatar } alt='thumbnail' />
                </CardFriendThumb>
                <CardFriendProfile>
                <div>
                    <span>Name :</span> 
                    <span>Phuc Vo</span>
                </div>
                <div>
                    <span>Age:</span>
                    <span> 25</span>
                </div>
                <div>
                    <span>Location:</span>
                    <span>hidden</span>
                
                </div>
                <div className="card__profile--interact">
                    <button className='message'>Send a message</button>
                    <button className='profile'>See Profile</button>
                </div>
                </CardFriendProfile>
            </CardFriend>
            <CardFriend>
                <CardFriendThumb thumb={ imageThumb }>
                    <img src={ avatar } alt='thumbnail' />
                </CardFriendThumb>
                <CardFriendProfile>
                <div>
                    <span>Name :</span> 
                    <span>Phuc Vo</span>
                </div>
                <div>
                    <span>Age:</span>
                    <span> 25</span>
                </div>
                <div>
                    <span>Location:</span>
                    <span>hidden</span>
                
                </div>
                <div className="card__profile--interact">
                    <button className='message'>Send a message</button>
                    <button className='profile'>See Profile</button>
                </div>
                </CardFriendProfile>
            </CardFriend>
            <CardFriend>
                <CardFriendThumb thumb={ imageThumb }>
                    <img src={ avatar } alt='thumbnail' />
                </CardFriendThumb>
                <CardFriendProfile>
                <div>
                    <span>Name :</span> 
                    <span>Phuc Vo</span>
                </div>
                <div>
                    <span>Age:</span>
                    <span> 25</span>
                </div>
                <div>
                    <span>Location:</span>
                    <span>hidden</span>
                
                </div>
                <div className="card__profile--interact">
                    <button className='message'>Send a message</button>
                    <button className='profile'>See Profile</button>
                </div>
                </CardFriendProfile>
            </CardFriend>
            <CardFriend>
                <CardFriendThumb thumb={ imageThumb }>
                    <img src={ avatar } alt='thumbnail' />
                </CardFriendThumb>
                <CardFriendProfile>
                <div>
                    <span>Name :</span> 
                    <span>Phuc Vo</span>
                </div>
                <div>
                    <span>Age:</span>
                    <span> 25</span>
                </div>
                <div>
                    <span>Location:</span>
                    <span>hidden</span>
                
                </div>
                <div className="card__profile--interact">
                    <button className='message'>Send a message</button>
                    <button className='profile'>See Profile</button>
                </div>
                </CardFriendProfile>
            </CardFriend>
        </Wrapper>
    )
}

export default CardFriends;