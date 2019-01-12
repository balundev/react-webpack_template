import React from "react"
import EntryPageName from "./entryPageName.jsx";
import EntryPageButton from "./entryPageButton.jsx";

class EntryPage extends React.Component {
    handleNavigation =()=>{
        if(this.props.currentNavigation!=="1"){
            this.props.navigationChange("1");
        }
    };
    render() {
        return (
            <div onMouseOver={this.handleNavigation} className="entry-page">
                <EntryPageName/>
                <EntryPageButton navigationChange={this.props.navigationChange} scrollTo={this.props.scrollTo}/>
            </div>
        );
    }
}

export default EntryPage