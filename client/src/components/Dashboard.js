import React from "react";
import { Grid, Segment, Header, Icon, Statistic } from "semantic-ui-react";

// ui equal width left aligned padded grid stackable
// ui stackable padded left aligned equal width grid
const Dashboard = () => (
	<Grid columns="equal" textAlign="left" padded stackable>
		<Grid.Row>
			<Grid.Column>
				<Segment.Group className="no-padding">
					<Segment basic className="no-padding-bottom">
						<Header as="h5" floated="left">
							Sales Statistics
						</Header>
						<Header as="h5" floated="right">
							<Icon link name="angle up" size="small" />
							<Icon link name="refresh" size="small" />
							<Icon link name="close" size="small" />
						</Header>
					</Segment>
					<Segment basic className="no-padding">
						<h1>Graph</h1>
						<div
							id="chart-curved-line"
							className="flot-chart"
							style={{
								width: "100%",
								height: "200px",
								padding: "0px",
								position: "relative"
							}}
						>
							<canvas
								className="flot-base"
								width="1650"
								height="250"
								style={{
									direction: "ltr",
									position: "absolute",
									left: "0px",
									top: "0px",
									width: "1320px",
									height: "200px"
								}}
							/>
							<canvas
								className="flot-overlay"
								width="1650"
								height="250"
								style={{
									direction: "ltr",
									position: "absolute",
									left: "0px",
									top: "0px",
									width: "1320px",
									height: "200px"
								}}
							/>
						</div>
					</Segment>
				</Segment.Group>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column tablet={16} computer={4}>
				<Segment textAlign="left">
					<Statistic>
						<Statistic.Value className="counter">3,952</Statistic.Value>
						<Statistic.Label>Orders</Statistic.Label>
						<Icon
							link
							name="cart"
							color="teal"
							size="large"
							className="statisticIcon"
						/>
					</Statistic>
					<div
						id="flot-order"
						className="flotchart"
						style={{ padding: "0px", position: "relative" }}
					>
						<canvas
							className="flot-base"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
						<canvas
							className="flot-overlay"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
					</div>
				</Segment>
			</Grid.Column>
			<Grid.Column tablet={16} computer={4}>
				<Segment textAlign="left">
					<Statistic>
						<Statistic.Value className="counter">57.6%</Statistic.Value>
						<Statistic.Label>Average Time</Statistic.Label>
						<Icon
							link
							name="time"
							color="blue"
							size="large"
							className="statisticIcon"
						/>
					</Statistic>
					<div
						id="flot-avergae"
						className="flotchart"
						style={{ padding: "0px", position: "relative" }}
					>
						<canvas
							className="flot-base"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
						<canvas
							className="flot-overlay"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
					</div>
				</Segment>
			</Grid.Column>
			<Grid.Column tablet={16} computer={4}>
				<Segment textAlign="left">
					<Statistic>
						<Statistic.Value className="counter">3,112</Statistic.Value>
						<Statistic.Label>Saves</Statistic.Label>
						<Icon
							link
							name="magnet"
							color="purple"
							size="large"
							className="statisticIcon"
						/>
					</Statistic>
					<div
						id="flot-saves"
						className="flotchart"
						style={{ padding: "0px", position: "relative" }}
					>
						<canvas
							className="flot-base"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
						<canvas
							className="flot-overlay"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
					</div>
				</Segment>
			</Grid.Column>
			<Grid.Column tablet={16} computer={4}>
      <Segment textAlign="left">
					<Statistic>
						<Statistic.Value className="counter">9,582</Statistic.Value>
						<Statistic.Label>Page Views</Statistic.Label>
						<Icon
							link
							name="trophy"
							color="red"
							size="large"
							className="statisticIcon"
						/>
					</Statistic>
					<div
						id="flot-view"
						className="flotchart"
						style={{ padding: "0px", position: "relative" }}
					>
						<canvas
							className="flot-base"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
						<canvas
							className="flot-overlay"
							width="357"
							height="125"
							style={{
								direction: "ltr",
								position: "absolute",
								left: "0px",
								top: "0px",
								width: "286px",
								height: "100px"
							}}
						></canvas>
					</div>
				</Segment>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row stretched>
			<Grid.Column tablet={16} computer={10}>
				<h2>Table</h2>
			</Grid.Column>
			<Grid.Column tablet={16} computer={6}>
				<h2>Weather</h2>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default Dashboard;
