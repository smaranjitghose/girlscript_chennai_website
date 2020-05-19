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


const produceSchedulePart = (scheduleDetail, position) => {
    
    const { stageName, stageDetails, timings, favClasses } = scheduleDetail;
    const classFix = !(position === 'left') ? 'time-1' : 'time-2';

    const scheduleBox = `<div class="col-sm-12 links">
									<div class="featured-schedule">
										<div class="col pb-3 text-center">
											<i class="${favClasses}"></i>

											<h2><span>${stageName}</span></h2>
											<br />
											<p>${stageDetails}</p>
										</div>
										<div class="time ${classFix}">
											<h3>${timings}</h3>
										</div>
									</div>
                                </div>`;
    
    const scheduleSection = document.getElementById('schedule-box');
    scheduleSection.innerHTML += scheduleBox;
}

const insertSchedule = () => {
    eventSchedule.forEach((detail, index) => {
        const position = (index % 2 === 0) ? 'left' : 'right';
        produceSchedulePart(detail, position);
    });
}

insertSchedule();