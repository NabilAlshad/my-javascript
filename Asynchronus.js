//example of asynchoronus function
const process = (customer) => {
  console.log("processing order for customer ");
  setTimeout(() => {
    console.log("completed");
  }, 2000);
  console.log("processed");
};
console.log("take order");
process();
console.log("completing");

// async function myMeeting() {
//   const meetingDetails = await meeting;
//   const mycalender = await addCalender(meet);
//   console.log(mycalender);
// }
// myMeeting();
