export const rotateCoin = () => {
  return new Promise((resolve) => {
    const sec = 3;
    const milliSeconds = sec * 1000;

    const coin = document.querySelector("#coin");
    coin.style.transition = `transform ${sec}s ease-in`;

    const randomX = Math.floor(Math.random() * (5001 - 1000)) + 1000;
    const randomY = Math.floor(Math.random() * (10001 - 5000)) + 5000;
    const randomZ = 0; // Random degrees between 0 and 3600

    coin.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;

    setTimeout(() => {
      coin.style.transition = `transform ${sec}s cubic-bezier(.2, .2, 0, 1)`;

      const array = new Uint8Array(1);
      window.crypto.getRandomValues(array);

      // Map the random number to 0 or 1
      const outcome = array[0] % 2;
      coin.style.transform = `rotateX(${
        outcome === 0 ? 0 : 180
      }deg) rotateY(0deg) rotateZ(${randomZ}deg)`;
      setTimeout(() => {
        resolve(outcome);
      }, milliSeconds);
    }, milliSeconds - 10);
  });
};
