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
meeting
  .then(addCalender)
  .then((resolve) => {
    console.log(JSON.stringify(resolve));
  })
  .catch((error) => {
    console.log(JSON.stringify(error.message));
  });
