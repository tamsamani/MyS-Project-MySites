import React from "react";
import Head from "next/head";

export default class Page extends React.Component {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
		return { userAgent };
	}

	render() {
		const { name = "MySites - MyS Project" } = this.props;

		return (
			<div>
				<Head>
					<title>{this.props.name}</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
					<meta
						name="description"
						content="Some Description here, MyS Project it's own projects for makeing High responsive websites using React and Other framWorks"
					/>
				</Head>
				<div>{/** page Body */}</div>
				{"Pages"}
			</div>
		);
	}
}
