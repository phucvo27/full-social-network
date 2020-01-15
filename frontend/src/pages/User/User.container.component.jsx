import { compose } from 'redux';
import { connect } from 'react-redux';
import withSpinner from '../../components/WithSpinner/WithSpiner.component';
import User from './User.component';



const mapStateToProps = (state , ownProps) => {
    const { match } = ownProps.match;
    const uid = match.params.uid;
    return {
        isLoading: !(state.user[uid] && state.posts[uid]) ? true : false
    }
}

const UserContainer = compose(connect(mapStateToProps), withSpinner )(User);

export default UserContainer;