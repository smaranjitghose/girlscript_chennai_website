const eventSchedule = [
	{
		stageName: 'Registration',
		stageDetails: `On-site registration for the qualified teams, attendance will be marked here.`,
		timings: '11:30 a.m - 12:30 p.m',
		favClasses: 'fa fa-users'
	},
	{
		stageName: 'Event-Opening',
		stageDetails: `Introduction to the organisers, mentors, judges and discussing event details.`,
		timings: '1:30 p.m - 3:30 p.m',
		favClasses: 'fa fa-handshake-o'
	},
	{
		stageName: 'Event-Begins',
		stageDetails: `Participants will be required to submit the idea they’ve finalised and
						will be working on for the rest of the hackathon.`,
		timings: '5:30 p.m - 7:30 p.m',
		favClasses: 'fa fa-bug'
	},
	{
		stageName: 'Dinner',
		stageDetails: `Dinner by catering services/campus mess.`,
		timings: '8:30 p.m - 10:00 p.m',
		favClasses: 'fa fa-birthday-cake'
	},
	{
		stageName: 'Evaluation',
		stageDetails: `Participants will be required to present the progress on their final
						application.`,
		timings: '9:30 p.m -11:00 p.m',
		favClasses: 'fa fa-asl-interpreting'
	}
];

const FAQ = [
	{
		question: `Does it cost anything?`,
		answer: `No - our events are always free of charge.`
	},
	{
		question: `Does registering mean I am all set to attend?`,
		answer: `Not yet. While your chances of getting a seat are pretty good, we will confirm
				attendees on a case-by -case basis to ensure we attract the right audience.Note that
				your seat is not confirmed until you receive a confirmation code.`
	},
	{
		question: `When will I hear back if I have a spot?`,
		answer: `We'll try to confirm you at least two days before the event!`
	}
];

const produceSchedulePart = (scheduleDetail, position) => {
	const { stageName, stageDetails, timings, favClasses } = scheduleDetail;
	let classFix = position === 'left' ? 'time-1' : 'time-2';

	const scheduleBox = `<div class="col-sm-12 links"> 
									<div class="featured-schedule">
										<div class="col pb-3 text-center">
											<i class="${favClasses}"></i>

											<h2><span>${stageName}</span></h2>
											<br />
											<p>
												${stageDetails}
											</p>
										</div>
										<div class="time ${classFix}">
											<h3>${timings}</h3>
										</div>
									</div>
								</div>`;

	const scheduleSection = document.getElementById('schedule-box');
	scheduleSection.innerHTML += scheduleBox;
};

const produceFAQCards = faq => {
	const { question, answer } = faq;

	const faqCard = `<div class="row">
							<div class="col m-3 question-border">
								<h3 class="ques">${question}</h3>
								<p class="ans">
									${answer}
								</p>
							</div>
						</div>`;
	const faqSection = document.getElementById('faq-question');
	faqSection.innerHTML += faqCard;
};

const insertSchedule = () => {
	eventSchedule.forEach((detail, index) => {
		let position = index % 2 == 0 ? 'left' : 'right';
		produceSchedulePart(detail, position);
	});
	const avoidReflectionFix = `<div style="clear: both;"></div>`;
	const scheduleSection = document.getElementById('schedule-box');
	scheduleSection.innerHTML += avoidReflectionFix;
};

const insertFAQ = () => {
	FAQ.forEach(faq => {
		produceFAQCards(faq);
	});

	const scheduleSection = document.getElementById('schedule-box');
	scheduleSection.innerHTML += `<br /><br /><br />`;
};

insertSchedule();
insertFAQ();
