export const handleNotification = (props, data) => {

    if(props.type === 'message'){
        props.getNewMessage(data)
    }else if( props.type === 'notification'){
        props.getNotification(data);
    }
}