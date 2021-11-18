//promise

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meet = {
      date: "tomorrow",
      place: "google meet",
    };
    resolve(meet);
  } else {
    reject(new Error("already scheduled"));
  }
});

const addCalender = (meet) => {
  const calender = `${meet.date} has been ${meet.place}`;
  return Promise.resolve(calender);
};

async function myMeeting(meet) {
  try {
    const meetingDetails = await meeting;
    const calender = await addCalender(meetingDetails);
    console.log(calender);
  } catch {
    console.log("something wrong happened");
  }
}
// meeting
//   .then(addCalender)
//   .then((resolve) => {
//     console.log(JSON.stringify(resolve));
//   })
//   .catch((error) => {
//     console.log(JSON.stringify(error.message));
//   });
myMeeting();
