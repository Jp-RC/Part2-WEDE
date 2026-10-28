//animations
//interaction on website
const animals =["🐕",
    "🐎", 
    "🫏", 
    "🐄", 
    "🐐", 
    "🐑", 
    "🐖", 
    "🐓", 
    "🐇" ];

    document.addEventListener("click", function (event){
        const animal = document.createElement("Span");

        const randomIndex = Math.floor(Math.random() * animals.length);

        animal.textContent = animals[randomIndex];
        animal.style.position = "fixed";
        animal.style.left = event.clientX + "px";
        animal.style.top = event.clientY + "px";
        animal.style.fontSize = "20px";
        animal.style.zIndex = "99999";
        animal.style.pointerEvents = "none";
        animal.style.opacity = "1";
        animal.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";

        document.body.appendChild(animal);

        requestAnimationFrame(function() {
            animal.style.transform = "translateY(-60px)";
            animal.style.opacity = "0";
        })
        setTimeout(function () {
            animal.remove();
        }, 1500);
    });

    //animation for the Donation button
    const donateButton = document.querySelector(".Dono");

    if (donateButton) {
       let enlarged = false;

       setInterval(function () {
        enlarged = !enlarged;

        donateButton.style.transform = enlarged
            ? "scale(1.08)"
            : "scale(1)";
       }, 750);
    }
// the counts how many people visit the website temporarily
const visitorCount = document.getElementById("visitor-count");

if(visitorCount){
    const hasCounted = sessionStorage.getItem("kpiCounted");
    const target = 1000;

    if (hasCounted){
        visitorCount.textContent = "1,000+";
    } else {
        const duration = 2000;
        const startTime = performance.now();

        sessionStorage.setItem("kpiCounted", "true");

        function countUp(currentTime) {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );
            visitorCount.textContent = 
            Math.floor(target * progress).toLocaleString() +
            (progress === 1 ? "+" : "");

            if (progress < 1) {
                requestAnimationFrame(countUp);
            }
        }
        requestAnimationFrame(countUp);
    }
}
//