import React from 'react';
import Spinner from '../Spinner/Spinner.component';

const withSpinner = WrapperComponent => ({isLoading, ...otherProps}) => {
    console.log(isLoading)
    return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />
}

export default withSpinner;