import React from 'react';
import { compose } from 'redux';
import withSpinner from '../../components/WithSpinner/WithSpiner.component';
import Home from './Home.component';



const mapStateToProps = state => {
    return {
        isLoading: true
    }
}

const HomeContainer = compose(connect(mapStateToProps), withSpinner )(Home);

export default HomeContainer;