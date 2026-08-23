const tau = Math.PI * 2;
var dynas = []

function init() {
    dynas = document.querySelectorAll("dyna");

    for (const dyna of dynas) {
        const text = dyna.textContent;
        dyna.textContent = "";

        for (const char of text) {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            dyna.appendChild(span);
        }
    }
}

function update(t) {
    t /= 1000;
    for (const dyna of dynas) {
        var offX = 0;
        var offY = 0;
        var offR = 0;

        const oscxPhase = Number(dyna.getAttribute("data-oscx-phase")) || 0;
        const oscxAmp = Number(dyna.getAttribute("data-oscx-amp")) || 0;
        const oscxFreq = Number(dyna.getAttribute("data-oscx-freq")) || 0;

        const oscyPhase = Number(dyna.getAttribute("data-oscy-phase")) || 0;
        const oscyAmp = Number(dyna.getAttribute("data-oscy-amp")) || 0;
        const oscyFreq = Number(dyna.getAttribute("data-oscy-freq")) || 0;

        const oscrPhase = Number(dyna.getAttribute("data-oscr-phase")) || 0;
        const oscrAmp = Number(dyna.getAttribute("data-oscr-amp")) || 0;
        const oscrFreq = Number(dyna.getAttribute("data-oscr-freq")) || 0;

        offX += oscxAmp * Math.sin(tau * (t * oscxFreq + oscxPhase));
        offY += oscyAmp * Math.sin(tau * (t * oscyFreq + oscyPhase));
        offR += oscrAmp * Math.sin(tau * (t * oscrFreq + oscrPhase));

        dyna.style.transform =
            `translate(${offX}px, ${offY}px) rotate(${offR}deg)`;

        const coscxPhase = Number(dyna.getAttribute("data-coscx-phase")) || 0;
        const coscxOff = Number(dyna.getAttribute("data-coscx-off")) || 0;
        const coscxAmp = Number(dyna.getAttribute("data-coscx-amp")) || 0;
        const coscxFreq = Number(dyna.getAttribute("data-coscx-freq")) || 0;

        const coscyPhase = Number(dyna.getAttribute("data-coscy-phase")) || 0;
        const coscyOff = Number(dyna.getAttribute("data-coscy-off")) || 0;
        const coscyAmp = Number(dyna.getAttribute("data-coscy-amp")) || 0;
        const coscyFreq = Number(dyna.getAttribute("data-coscy-freq")) || 0;

        const coscrPhase = Number(dyna.getAttribute("data-coscr-phase")) || 0;
        const coscrOff = Number(dyna.getAttribute("data-coscr-off")) || 0;
        const coscrAmp = Number(dyna.getAttribute("data-coscr-amp")) || 0;
        const coscrFreq = Number(dyna.getAttribute("data-coscr-freq")) || 0;

        const children = dyna.children;
        for (const [idx, child] of [...children].entries()) {
            var coffX = 0;
            var coffY = 0;
            var coffR = 0;

            coffX += coscxAmp * Math.sin(
                tau * (t * coscxFreq + coscxPhase + coscxOff * idx)
            );
            coffY += coscyAmp * Math.sin(
                tau * (t * coscyFreq + coscyPhase + coscyOff * idx)
            );
            coffR += coscrAmp * Math.sin(
                tau * (t * coscrFreq + coscrPhase + coscrOff * idx)
            );

            child.style.transform =
                `translate(${coffX}px, ${coffY}px) rotate(${coffR}deg)`;
        }
    }

    requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", () => {
    init();
    requestAnimationFrame(update);
})