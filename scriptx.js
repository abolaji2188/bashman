// Typewriter effect
// function typeWriter(text, i, callback) {
//     if (i < text.length) {
//         document.getElementById("typewriter").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(() => typeWriter(text, i, callback), 150); // Adjust speed here
//     } else if (callback) {
//         callback();
//     }
// }

// Start typewriter effect
// window.onload = function() {
//     typeWriter("Happy Birthday Brother Bashir", 0, function() {
       
//     });
// }
// const text = "happy birthday\nbrother bashir";
// const lines = text.split("\n");

// const line1Element = document.getElementById("line1");
// const line2Element = document.getElementById("line2");

// let index1 = 0;
// let index2 = 0;

// function typeWriterLine1() {
//     if (index1 < lines[0].length) {
//         line1Element.textContent += lines[0].charAt(index1);
//         index1++;
//         setTimeout(typeWriterLine1, 100); // Adjust typing speed
//     } else {
//         setTimeout(typeWriterLine2, 500); // Wait before starting line 2
//     }
// }

// function typeWriterLine2() {
//     if (index2 < lines[1].length) {
//         line2Element.textContent += lines[1].charAt(index2);
//         index2++;
//         setTimeout(typeWriterLine2, 100); // Adjust typing speed
//     } else {
//         line1Element.style.borderRight = 'none'; // Remove cursor after typing
//         line2Element.style.borderRight = 'none'; // Remove cursor after typing
//     }
// }

// // Start typing
// typeWriterLine1();
  
  /* Add the text content using JavaScript */
  const line1Text = "Happy Birthday";
  const line2Text = "Brother Bashir";
  
  document.getElementById("line1").innerHTML = "";
  document.getElementById("line2").innerHTML = "";
  
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < line1Text.length) {
      document.getElementById("line1").innerHTML += line1Text.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      charIndex = 0;
      setTimeout(function() {
        let charIndex2 = 0;
        function typeWriter2() {
          if (charIndex2 < line2Text.length) {
            document.getElementById("line2").innerHTML += line2Text.charAt(charIndex2);
            charIndex2++;
            setTimeout(typeWriter2, 100);
          }
        }
        typeWriter2();
      }, 2000); // Wait 2 seconds before typing the second line
    }
  }
  
  typeWriter();



// Confetti effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FFC700', '#FF3D00', '#FFEA00', '#00B0FF', '#00FF00'];

    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '0px'; // Start from the top

        confettiContainer.appendChild(confetti);

        // Animate pouring effect
        const fallDuration = Math.random() * 3 + 2; // 2 to 5 seconds
        confetti.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${window.innerHeight}px)` }
        ], {
            duration: fallDuration * 1000,
            easing: 'linear',
            fill: 'forwards'
        });

        // Remove confetti after animation ends
        setTimeout(() => confetti.remove(), fallDuration * 1000);
    }, 300); // Create a new confetti every 300ms
}

createConfetti();

// Infinite Fireworks effect
function showFireworks() {
    const colors = ['#daa520', 'ffd700'];
    
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 360,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight - 0.2 },
            colors: [colors[Math.floor(Math.random() * colors.length)]],
        });
    }, 1000); // Fireworks every second
}

// Show fireworks on page load
showFireworks();

// Modal functionality
const modal = document.getElementById("modal");
const btn = document.getElementById("neon-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
