const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 9),
    endDate: new Date(2021, 1, 1, 10),
};

const isOverlap = (newAppointment) => {
    return dates.some( date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate },
            {start: newAppointment.startDate, end: newAppointment.endDate},
        );
    });
}

console.log("Overlap:", isOverlap(newAppointment));