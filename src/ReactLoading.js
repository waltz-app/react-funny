var React = require('react');

export default function Loading({size, title, message, spinner}) {
  function chooseFunnyMessage() {
    let funnys = [
      "We'll be back in a sec.",
      "640K ought to be enough for anybody",
      "The architects are still drafting",
      "The bits are breeding",
      "We're building the buildings as fast as we can",
      "Would you prefer chicken, steak, or tofu?",
      "Pay no attention to the man behind the curtain",
      "And enjoy the elevator music",
      "While the little elves draw your map",
      "A few bits tried to escape, but we caught them",
      "And dream of faster computers",
      "Would you like fries with that?",
      "Checking the gravitational constant in your locale",
      "Go ahead -- hold your breath",
      "At least you're not on hold",
      "Hum something loud while others stare",
      "You're not in Kansas anymore",
      "The server is powered by a lemon and two electrodes",
      "We love you just the way you are",
      "While a larger software vendor in Seattle takes over the world",
      "We're testing your patience",
      "As if you had any other choice",
      "Take a moment to sign up for our lovely prizes",
      "Don't think of purple hippos",
      "Follow the white rabbit",
      "Why don't you order a sandwich?",
      "The bits are flowing slowly today",
      "Dig on the 'X' for buried treasure... ARRR!",
      "It's still faster than you could draw it",
    ];
    return funnys[Math.floor(Math.random() * funnys.length)];
  }

  return <div className={`loading loading-${size || "md"}`}>
    {spinner ? <i className="fa fa-spinner fa-spin" /> : null}
    <h1>{title || "Loading..."}</h1>
    <p>{message ? message : chooseFunnyMessage()}</p>
  </div>;
}
