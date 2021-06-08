import React, {Component} from "react";
import "./About.css";


class About extends Component {
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
            <div className="aboutUsComponent">
                <div className="parent">
                    <div className="child right">
                            <h1 className="title">Founders :</h1>
                            <div className="imgSec">
                                <div className="indImg">
                                    <img src="/solution/assets/founder-1.png" alt="Founders"/>
                                </div>
                                <div className="indImg">
                                    <img src="/solution/assets/founder-2.png" alt="Founders"/>
                                </div>
                            </div>
                    </div>
                    <div className="child">
                        <div className="extraPadding">
                        <h1 className="title">About Us :</h1>
                            <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum </p>
                            </div>
                    </div>
                </div>    
                <div>
                    <div className="dealerTrustSec">
                        <h1 className="dealerTitle">Official Dealers and Trusted by : </h1>
                        <div className="dealerTrustCntr">
                            <div className="indivDelImg">
                                <img src="/solution/assets/kirloskar.png" alt="kirloskar"/>
                                <p className="desp">Kirloskar (Dealers)</p>
                            </div>
                            <div className="indivDelImg">
                                <img src="/solution/assets/ashok-leyland.png" alt="ashokleyland"/>
                                <p className="desp">Ashok Leyland (Dealers)</p>
                            </div>
                            <div className="indivDelImg">
                                <img src="/solution/assets/jk-tyre.png" alt="jktyre"/>
                                <p className="desp">JK Tyre (Suppliers)</p>
                            </div>
                            <div className="indivDelImg">
                                <img src="/solution/assets/karnatakaGovt.png" alt="karnatakaGovt"/>
                                <p className="desp">Projects of Karnataka Governament (Suppliers)</p>
                            </div>
                            <div className="indivDelImg">
                                <img src="/solution/assets/nestle.png" alt="nestle"/>
                                <p className="desp">Nestle (Suppliers)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;