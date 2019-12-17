import React from 'react';
import { Wrapper, AvatarNotification, ContentNotification } from './Notification-Item.styled';

const NotificationItem = ({avatar})=>{
    return (
        <Wrapper>
            <AvatarNotification src={avatar} alt='user-avatar' />
            <ContentNotification>
                <h5>Phuc has liked your post</h5>
                <p>5 minutes ago</p>
            </ContentNotification>
        </Wrapper>
    )
}

export default NotificationItem;