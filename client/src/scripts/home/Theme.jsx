import React, { Component } from 'react'
import themeImg from '../../assets/3.png'
import '../../styles/home/Theme.scss'
class Theme extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="Theme ">
					<div className="row ThemeRow ">
						<div className="ThemeImage  col-sm-12 col-md-6">
						
							<img src={themeImg} className="Themeimg" alt="theme" />
						</div>
						<div className="col-sm-12 col-md-6 text">
							<div className="heading link--kukuri">
								Theme
							</div>
							<div className="textMore">
								An amalgamation of dream and reality. Inspired
								by a movement epitomized by Salvadore Dalí,
								where pieces were created in a dream-like
								fashion to show the inner workings of the
								unconscious mind. A projection of the superior
								qualities of the liberated, irrational
								unconscious mind.
								<br />
								<br />A psychic automatism in its pure state, by
								which one proposes to express the actual
								functioning of thought…in the absence of any
								control exercised by reason, exempt from any
								aesthetic or moral concern.
								<br />
								<br />
								Presenting to you the theme of Uphoria 2019 –
								‘Surrealism’
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Theme
