export const fadeIn = (direction = "up", delay = 0) => {
  let x = 0;
  let y = 0;

  if (direction === "up") y = 80;
  if (direction === "down") y = -80;
  if (direction === "left") x = 80;
  if (direction === "right") x = -80;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
      scale: 0.95,
    },

    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
        delay,
      },
    },
  };
};