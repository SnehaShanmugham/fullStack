import { Component } from 'react' 
import PropTypes from 'prop-types'
import error from '../assets/images/error.avif'

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={ hasError:false}
    }

    static getDerivedStateFromError(error){
        return{hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
    }

    render(){
        if(this.state.hasError){
            return(
            <div>
                {/* <b>Something went wrong..</b> */}
                <img src={error} style={{ display: "block", margin: "auto", width: "30%" }} />
            </div>
            )
        }

        return this.props.children
    }
}

ErrorBoundary.propTypes={
    children:PropTypes.node.isRequired
}