document.addEventListener('DOMContentLoaded', () => {
  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
      .add({
          targets: '.ml11 .line',
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 700
      })
      .add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
      }).add({
          targets: '.ml11 .letter',
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i+1)
      }).add({
          targets: '.ml11',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
      });

});

document.addEventListener('DOMContentLoaded', () => {
    const slideshows = ['tops', 'bottoms', 'shoes'];
    slideshows.forEach(id => {
        let index = 0;
        const slides = document.querySelectorAll(`#${id} .slide`);
        slides[index].classList.add('active');

        setInterval(() => {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 3000); // Change slide every 3 seconds
    });
});

const tops = ['photos/amara.PNG', 'photos/edithlace.PNG', 'photos/rafaela.PNG', 'photos/gina.PNG', 'photos/archie.PNG', 'photos/orangelace.PNG', 'photos/iamgia.PNG'];
const bottoms = ['photos/ciara.PNG', 'photos/corinne.PNG', 'photos/stasy.PNG', 'photos/gracie.PNG', 'photos/malia.PNG', 'photos/julie.PNG'];
const shoes = ['photos/creamspezial.PNG', 'photos/navyspezial.PNG', 'photos/blackspezial.PNG', 'photos/clementine.PNG', 'photos/OG.PNG', 'photos/reeboks.PNG'];

function showImage(imgId, src) {
    const img = document.getElementById(imgId);
    img.src = src;
    img.style.display = 'block';
}

function randomizeImage(imgId) {
    const img = document.getElementById(imgId);
    let randomSrc = '';
    if (imgId === 'topImg') {
        randomSrc = tops[Math.floor(Math.random() * tops.length)];
    } else if (imgId === 'bottomImg') {
        randomSrc = bottoms[Math.floor(Math.random() * bottoms.length)];
    } else if (imgId === 'shoeImg') {
        randomSrc = shoes[Math.floor(Math.random() * shoes.length)];
    }
    showImage(imgId, randomSrc);
}

function downloadImage(imgId) {
    const img = document.getElementById(imgId);
    const link = document.createElement('a');
    link.href = img.src;
    link.download = img.src.split('/').pop();
    link.click();
}

function randomizeAll() {
    randomizeImage('topImg');
    randomizeImage('bottomImg');
    randomizeImage('shoeImg');
}

function downloadAll() {
    downloadImage('topImg');
    downloadImage('bottomImg');
    downloadImage('shoeImg');
}
