import Head from "next/head";
import PropTypes from "prop-types";
import HeaderOne from "../components/header/header-1";
import About from "../components/home-page/about";
import Testimonial from "../components/home-page/testimonial";
import { getAllItems } from "../lib/items-util";
import Brand from "../components/home-page/brand";
import PageBanner from "../components/page-banner/index";
import Team from "../components/team";

function AboutPage({ testimonialItems, brandItems, teamItems }) {
	return (
		<>
			<Head>
				<title>About - Your Business Name</title>
				<meta
					name="description"
					content="Learn about our company, team, and values"
				/>
			</Head>
			<HeaderOne />
			<PageBanner />
			<About />
			<Testimonial testimonialItems={testimonialItems} />
			<Brand brandItems={brandItems} />
			<Team teamItems={teamItems} />
		</>
	);
}

export function getStaticProps() {
	const testimonialItems = getAllItems("testimonial");
	const brandItems = getAllItems("brands");
	const teamItems = getAllItems("teams");

	return {
		props: {
			testimonialItems,
			brandItems,
			teamItems,
		},
	};
}

AboutPage.propTypes = {
	testimonialItems: PropTypes.instanceOf(Object).isRequired,
	brandItems: PropTypes.instanceOf(Object).isRequired,
	teamItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
