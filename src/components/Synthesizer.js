import * as Tone from 'tone'

function Synthesizer() {
    const synth = new Tone.Synth().toDestination();
  
    const DEGREES = [
      "C4",
      "C#4",
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4",
      "C5",
      "C#5",
      "D5",
      "D#5",
      "E5",
      "F5",
      "F#5",
      "G5",
      "G#5",
      "A5",
      "A#5",
      "B5"
    ];
  
    function zip(ar1, ar2, zipper) {
      return zipper
        ? Array.prototype.map.call(ar1, (value, index) =>
            zipper(value, ar2[index])
          )
        : ar1.map((value, index) => [value, ar2[index]]);
    }
  
    let synthTemplate = `<div class="grid">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
  
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
  
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
  
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </div>`;
  
    // dom
    let synthElement = document.createElement("div");
    synthElement.classList.add("card", "synthesizer");
    synthElement.innerHTML = synthTemplate;
  
    const dots = synthElement.querySelectorAll(".grid div");
  
    let zipped = zip(dots, DEGREES, function(a1, a2) {
      a1.addEventListener("mousedown", function() {
        synth.triggerAttackRelease(a2, "8n");
      });
      return (a1.dataset.note = a2);
    });
  
    return synthElement;
}

export default Synthesizer;