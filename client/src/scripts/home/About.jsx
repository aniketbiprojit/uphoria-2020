import React, { Component } from 'react'
import '../../styles/home/About.scss'
import Aboutimg from '../../assets/2.png'
class About extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="About ">
					<div className="row AboutRow ">
						<div className="aboutImage onPhone col-sm-12 col-md-6"> 
                        	<img src={Aboutimg} className="aboutimg" />
                        </div>
						<div className="col-sm-12 col-md-6 text">
							<div className="heading link--kukuri">About US</div>
							<div className="textMore">
								Uphoria – inspired by the ‘euphoric’ feeling
								experienced when attending, is an annual
								festival conducted in Bennett University. Our
								intention is to establish the feeling of
								elation, within each one you.
								<br />
								<br />
								To invigorate and energize you, ensuring that
								you leave feeling pure bliss. We hope to see you
								making new memories with us this year at Uphoria
								4.0!
							</div>
						</div>
						<div className="aboutImage onPc col-sm-12 col-md-6">
							<img src={Aboutimg} className="aboutimg" />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default About
