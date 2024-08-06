document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            section.style.backgroundColor = getComputedStyle(section).backgroundColor;
        }
    });
});

// Drawing variables
// Application variables
var string = "In Octuber 28 I wrote: It is incredible how life can radical change. After feeling so difficult to be loved I met the most incredible person, she makes my day everyday. I feel so safe and loved by her when she hugs me, her smile make mine appears and how much I love her! I just I could kiss her and hug her forever.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();