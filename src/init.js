import game, { handleUserAction } from "./gamestate";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("Starting game");
  initButtons(handleUserAction);
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    //function within a fuction is called a closure
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
