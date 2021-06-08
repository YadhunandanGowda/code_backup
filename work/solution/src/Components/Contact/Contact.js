import React, {Component} from "react";
// import GoogleMap from "../GoogleMap"
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

componentDidMount(){
    let show = this.props.routeName;
if(show =="notProd"){
    document.getElementsByClassName("prodRedirect")[0].style.display = "none";
}else {
    document.getElementsByClassName("prodRedirect")[0].style.display = "inline";
}
}

    render () {
        return (
            <div>
                <div className="mapContainer">
                    <div className="mapSec contentSec">
                    <h3 className="mpttl">Standard Engineering</h3>
                    <p>Near Ghandi Square, Prabha talkies building, Devaraja Mohalla, Mandi Mohalla, Mysuru, Karnataka 570001</p>
                    <p>Contact No : <a class="cont" href="tel:+918317388851">+918317388851</a></p>
                    <p>Email : <a class="cont" href="mailto:moinmeraj@standardengineeringco.com">moinmeraj@standardengineeringco.com</a></p>
                    </div>
                    <div className="mapSec">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0696706767308!2d76.65153721390183!3d12.311095032359626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf713a4345b467%3A0xa0e6556b210183d1!2sStandard%20Engineering!5e0!3m2!1sen!2sin!4v1607079283457!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;