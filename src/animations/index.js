export let slidein = function ({ setStyle, animate, duration, delay }) {
      animate(
        [
          {
            transform: "translate3d(-100%, 0, 0)",
            visibility: "visible",
          },
          {
            transform: "translate3d(0, 0, 0)",
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "ease",
        }
      );
    }
export let fadein = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translateY(-" + window.innerWidth + "px)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
          {
            transform: "translateY(-140px)",
            opacity: 1,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
          {
            transform: "translateY(-60px)",
            opacity: 1,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "ease",
        }
      );
}
export let slideinup = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translateY(-"+window.innerWidth+"px)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "ease",
        }
      );
    }
export let slideinups = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translateY(-" + window.innerWidth + "px)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "cubic-bezier(0.83, 0, 0.17, 1)",
        }
      );
    }
export let swirlin = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "scale(2)",
            transformOrigin: "0 50%",
            opacity: 0,
          },
          {
            transform: "scale(1)",
            transformOrigin: "0 50%",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "cubic-bezier(0.83, 0, 0.17, 1)",
        }
      );
    },
    focus = function ({ animate, duration, delay }) {
      animate(
        [
          {
            letterSpacing: "-.5em",
            filter: "blur(12px)",
            opacity: 0,
          },
          {
            filter: "blur(0)",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "cubic-bezier(0.83, 0, 0.17, 1)",
        }
      );
    }