import gameState from "./gamestate";

const TICK_RATE = 1000;

async function init() {
  console.log("Starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    //function within a fuction is called a closure
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
