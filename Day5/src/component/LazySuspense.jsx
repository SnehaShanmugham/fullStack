import PropTypes from 'prop-types'
import {Suspense} from 'react'
import loader from '../assets/images/loader.gif'
import ErrorBoundary from './ErrorBoundary'
import '../assets/css/Loader.css'

const LazySuspense=({component:Component, ...rest})=>{
    return(
        <Suspense fallback={<img src={loader} className='loader' alt='Loader'/>}>
            <ErrorBoundary>
            <Component {...rest}/>
            </ErrorBoundary>
        </Suspense>
        
    )
    
}

LazySuspense.propTypes ={
    component : PropTypes.element.isRequired
}

export default LazySuspense