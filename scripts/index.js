
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


const generateTrendsCard = (cardDetails, position = 'bottom') => {
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

}

const injectTrendsCards = () => {
    trendCardsDetails.forEach((trendCard, index) => {
        if (index < 3)
            generateTrendsCard(trendCard, 'top');
        else
            generateTrendsCard(trendCard);
    });
}

injectTrendsCards();