//promise
var meet = true;
const meeting = new Promise((resolve, reject) => {
  if (!meet) {
    meetingDetails = {
      date: "20february",
      location: "google meet"
    }
    resolve(meetingDetails);

  }
  else {
    reject(new Error("there is no meeting with"))
  }
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

const addCalender = (meet) => {
  const calender = `${meet.date} has been ${meet.place}`;
  return Promise.resolve(calender);
};
meeting
  .then(addCalender)
  .then((resolve) => {
    console.log(JSON.stringify(resolve));
  })
  .catch((error) => {
    console.log(JSON.stringify(error.message));
  });
