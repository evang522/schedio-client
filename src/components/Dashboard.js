import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0
		};
	}

	handleChange = value => {
		this.setState({
			slideIndex: value
		});
	};
	render() {
		const { authToken } = this.props;
		/*
			*** to do
		*/
		// authentication on dashboard component
		// if (!authToken) {
		// 	return this.props.history.push('/')
		// }
		return (
			<div>
				<Tabs onChange={this.handleChange} value={this.state.slideIndex}>
					<Tab label="Tab One" value={0} />
					<Tab label="Tab Two" value={1} />
					<Tab label="Tab Three" value={2} />
				</Tabs>
				<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
					<div>
						<h2 style={styles.headline}>Tabs with slide effect</h2>
						Event view component<br />
					</div>
					<div style={styles.slide}>Event List for exist events</div>
					<div style={styles.slide}>Event List for all past events</div>
				</SwipeableViews>
			</div>
		);
	}
}

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400
	},
	slide: {
		padding: 10
	}
};
const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps)(withRouter(Dashboard));
