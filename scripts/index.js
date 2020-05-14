"use strict";

// import necessary SVG Files

import { openSourceSvg } from './svg.js';
import { researchWorkSvg } from './svg.js';
import { publicSpeakingSvg } from './svg.js';
import { interpersonalSvg } from './svg.js';

const breakPosition = {
	'0': 'top',
	'1': 'bottom'
};

const trendCardsDetails = [
	{
		backgroundCover: 'assets/Images/index/ml.jpg',
		displayName: 'Machine Learning'
	},
	{
		backgroundCover: 'assets/Images/index/IoT1.jpg',
		displayName: 'Internet of Things'
	},
	{
		backgroundCover: 'assets/Images/index/program.jpg',
		displayName: 'Web Development'
	},
	{
		backgroundCover: 'assets/Images/index/cloud1.jpg',
		displayName: 'Cloud Computing'
	},
	{
		backgroundCover: 'assets/Images/index/cs3.jpg',
		displayName: 'Cyber Security'
	},
	{
		backgroundCover: 'assets/Images/index/robot1.jpg',
		displayName: 'Robotics'
	}
];

const initiativesDetails = [
	{
		mainHeading: 'Open Source',
		subHeading: 'Projects',
		description: `Open-source software code. Generally, open source refers to a computer program in
					which the source code is available to the general public for use.`,
		classFix: '',
		svg: openSourceSvg
	},
	{
		mainHeading: 'Research',
		subHeading: 'Work',
		description: `Research is "creative and systematic work undertaken to increase the stock of
					knowledge, and the use of this stock of knowledge to devise new applications."`,
		classFix: '',
		svg: researchWorkSvg
	},
	{
		mainHeading: 'Public',
		subHeading: 'Speaking',
		description: `GirlScript, with it's various conferences and meet- ups, helps its community to
					master the art of public speaking and build the leaders of tomorrow.`,
		classFix: 'fix-touch',
		svg: publicSpeakingSvg
	},
	{
		mainHeading: 'Interpersonal',
		subHeading: 'Development',
		description: `Interpersonal skills are the skills we use every day when we communicate and
					interact with other people, both individually and in groups.`,
		classFix: 'fix-touch',
		svg: interpersonalSvg
	}
];

const generateTrendsCard = (cardDetails, position) => {
	const { backgroundCover, displayName } = cardDetails;

	const trendCard = `<div class="ih-item circle effect">
					<a>
						<div class="img">
							<img src=${backgroundCover} alt=${displayName} aria-label=${displayName} />
						</div>
						<div class="info">
							<div class="info-back">
								<h3>${displayName}</h3>
							</div>
						</div>
					</a>
                </div>`;

	let injectionSection = document.getElementById(`trends-${position}`);

	injectionSection.innerHTML += trendCard;
};

const injectTrendsCards = () => {
	trendCardsDetails.forEach((trendCard, index) => {
		const breakPoint = Math.floor(index / 3);
		generateTrendsCard(trendCard, breakPosition[breakPoint]);
	});
};


const generateInitiavesCard = (initiativeDetail, position) => {
	const { mainHeading, subHeading, description, classFix, svg } = initiativeDetail;
	const initiativeCard = `<div class="flip-card ${classFix}">
						<div class="flip-card-content">
							<div class="flip-card-front">
								<h5 class="flip-card-head">
								${mainHeading}<span>${subHeading}
								</span>
								</h5>
								<div class="flip-card-img">
									${svg}
								</div>
							</div>
							<div class="flip-card-back">
								<p class="flip-card-detail">
									${description}
								</p>
							</div>
						</div>
					</div>`;
	
	const injectionPoint = document.getElementById(`initiatives-${position}`);
	injectionPoint.innerHTML += initiativeCard;
}

const injectInitiavesCards = () => {
	initiativesDetails.forEach((initiativeDetail, index) => {
		if (index < 2)
			generateInitiavesCard(initiativeDetail, 'upper');
		else
			generateInitiavesCard(initiativeDetail, 'lower');
	});
}

injectInitiavesCards();
injectTrendsCards();

