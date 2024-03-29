export const formatDate = (date) => {
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return formattedHours + ":" + formattedMinutes + " " + ampm;
};
