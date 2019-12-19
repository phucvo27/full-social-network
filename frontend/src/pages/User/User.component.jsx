import React, { Component } from 'react';

class UserPage extends Component{

    constructor(props){
        super(props);
        console.log(props)
        //console.log(useParams())
    }

    async componentDidMount(){
        
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <p>This is User page </p>
            </div>
        )
    }
}


export default UserPage;