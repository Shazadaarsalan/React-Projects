import React from 'react';

class dashboard extends React.Component {
    
    render() {
        return (
            <div>
               
                <h1>dashboard</h1>
                <h2>{this.props.match.params.username}</h2>

                
            </div>
        )
    }
}
export default dashboard



