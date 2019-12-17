import React from 'react';
import { CardWrapper, CardTitle, CardAuthor, CardAvatar, CardBody, CardFooter, FriendListLiked, FriendLiked, FriendAvatar, FormComment } from './Card.styled'
import { ReactComponent as Heart } from '../../assets/SVG/Heart.svg';
import { ReactComponent as Message } from '../../assets/SVG/Message.svg';
import userAvatar from '../../assets/user-1.jpg';
import userAvatar2 from '../../assets/user-2.jpg';
import Button from '../Button/Button.component';
import FormInput from '../InputField/Input.component';

const Card = ({ listImage=[] }) => {
    return (
        <CardWrapper>
            <CardTitle>
                <CardAvatar src={userAvatar} alt='user-avatar' />
                <CardAuthor>
                    <h1>Phuc Vo</h1>
                    <p>19 hours ago</p>
                </CardAuthor>
            </CardTitle>
            <CardBody>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo magni iusto id cum nesciunt laboriosam omnis labore, accusamus quasi illum ipsum rerum a? Hic nulla iste quasi perferendis qui.</p>
                { listImage.length > 0 && listImage.map((image, idx) => {
                    return (<img key={idx} src={image} alt='post-content' />)
                })}
            </CardBody>
            <CardFooter>
                <Heart />
                <p>8</p>
                <FriendListLiked>
                    <FriendLiked>
                        <FriendAvatar src={userAvatar2} alt='user-avatar' />
                    </FriendLiked>
                    <FriendLiked>
                        <FriendAvatar src={userAvatar} alt='user-avatar' />
                    </FriendLiked>
                    <FriendLiked>
                        <FriendAvatar src={userAvatar} alt='user-avatar' />
                    </FriendLiked>
                </FriendListLiked>
                <Message />
                <p>17</p>
            </CardFooter>
            <FormComment>
                <FormInput 
                    placeholder='Add your comment here'
                    width='100%'
                />
                <Button typeBtn='highlight'>Post Comment</Button>
            </FormComment>
        </CardWrapper>
    )
}
export default Card;