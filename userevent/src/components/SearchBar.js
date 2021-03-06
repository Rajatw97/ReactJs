import React from 'react'
class SearchBar extends React.Component{

    state={term:''};
    onSubmitChange=(event)=>{
        event.preventDefault();
        this.props.onSubmitcall(this.state.term);
         
    };
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitChange}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"  value={this.state.term} onChange={e=>this.setState({term:e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    };
    
};

export default SearchBar