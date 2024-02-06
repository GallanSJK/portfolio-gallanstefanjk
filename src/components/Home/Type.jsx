
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "JS Stack Developer",
            "PHP Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default Type;
