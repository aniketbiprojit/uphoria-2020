import React, { Component } from 'react'
import '../../styles/home/Upper.scss'
// import Upperimg from '../../assets/1.jpg'
class Upper extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="Upper">
					<div className="navUpper">
						<div className="right">
							<div className="row">
								<div className="col-sm-4 col-md-4"><span className="nav">Sponsors</span></div>
								<div className="col-sm-4 col-md-4"><span className="nav">Register</span></div>
								<div className="col-sm-4 col-md-4"><span className="nav">Artists</span></div>

							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Upper
