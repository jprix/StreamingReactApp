import React from 'react';
import { fetchStream, editStream } from "../../actions";
import { connect } from 'react-redux'
import StreamForm from "./StreamForm";
import _ from 'lodash'

class StreamEdit extends React.Component {
    //fetches stream json object from state.
 componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
 }

 onSubmit = (formValues) => {
     console.log(formValues)
     this.props.editStream(this.props.match.params.id, formValues);
 }



 render() {
     console.log(this.props)
     if(!this.props.stream){
         return <div>loading...</div>
     }
     return (
         <div>
            <h3>Edit a Stream</h3>
             <StreamForm
                 onSubmit={this.onSubmit}
                 initialValues={_.pick(this.props.stream, 'title', 'description')}/>
         </div>
     )
    }
 }

//ownprops is the propbs object from StreamEdit
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
