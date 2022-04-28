var typed = new Typed(".myName", {
  strings: ["Oakar Min"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

var type = new Typed(".myLanguage", {
  strings: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let headerContainer = document.getElementsByClassName("headerContainer")[0];
let section = document.querySelectorAll("section");
let htmlSkill = document.getElementsByClassName("htmlSkill")[0];
let skillProgress = document.getElementsByClassName("skillProgress")[0];
let percentSkills = document.querySelectorAll(".percentSkills");
let progressBar = document.querySelectorAll(".progress-bar");
let javascriptDiv = document.getElementsByClassName("javascriptDiv")[0];
let cssDiv = document.getElementsByClassName("cssDiv")[0];
let htmlDiv = document.getElementsByClassName("htmlDiv")[0];
let bootstrapDiv = document.getElementsByClassName("bootstrapDiv")[0];
let responsiveDiv = document.getElementsByClassName("responsiveDiv")[0];
let webDesignDiv = document.getElementsByClassName("webDesignDiv")[0];
let callFunctionOne = 0;
let naviSelect = document.getElementsByClassName("navi-select");
let naviMobileSelect = document.getElementsByClassName("naviMobileSelect");

let sectionAnimateFunction = (div, delaySec, movePx) => {
  div.style.transform = `translate(${movePx}px)`;
  div.style.transitionDelay = `${delaySec}`;
};

window.addEventListener("scroll", () => {
  if (pageYOffset > 300) {
    headerContainer.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
    headerContainer.style.backgroundColor = "transparent";
  }

  let currentId;
  section.forEach((element) => {
    let sectionTop = element.offsetTop;
    let sectionHeight = element.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      currentId = element.getAttribute("id");
    }
  });
  console.log(currentId)
  for (let i = 0; i < naviSelect.length; i++) {
    if (naviSelect[i].classList.contains(currentId)) {
      headerUnderlineChecker = document.getElementsByClassName(
        `${currentId}Anchor`
      )[0];
      underlineMenuActive.style.marginLeft =
        headerUnderlineChecker.offsetLeft + "px";
      underlineMenuActive.style.width =
        headerUnderlineChecker.offsetWidth + "px";
      
      let anchorMobileSelector = document.getElementsByClassName(`${currentId}AnchorMobile`)[0];
      let anchorMobileSelectorParents = anchorMobileSelector.parentElement;
      let naviSelectActive = document.getElementsByClassName("naviSelectActive")[0];
      naviSelectActive.classList.remove("naviSelectActive");
      anchorMobileSelectorParents.classList.add("naviSelectActive");
    }
  }

  if (currentId == "about") {
    callFunctionOne++;
    if (callFunctionOne == 1) {
      percentSkills.forEach((element, index) => {
        let updateCounterNumber = () => {
          let target = +element.getAttribute("data-target");
          let increment = target / 500;
          let c = +element.innerHTML;
          if (c <= target) {
            element.innerHTML = Math.ceil(c + increment);
            progressBar[index].style.width = `${c + increment}%`;
            setTimeout(updateCounterNumber, 15);
          }
        };
        updateCounterNumber();
      });
    }
  }

  let sectionAnimatedId;
  section.forEach((element) => {
    let sectionTop = element.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      sectionAnimatedId = element.getAttribute("id");
    }
  });
  if (sectionAnimatedId == "services") {
    sectionAnimateFunction(javascriptDiv, "", "0");
    sectionAnimateFunction(cssDiv, "0.5s", "0");
    sectionAnimateFunction(htmlDiv, "0.8s", "0");
    sectionAnimateFunction(bootstrapDiv, "", "0");
    sectionAnimateFunction(responsiveDiv, "0.5s", "0");
    sectionAnimateFunction(webDesignDiv, "0.8s", "0");
  } else {
    sectionAnimateFunction(htmlDiv, "", "-2000");
    sectionAnimateFunction(cssDiv, "0.5s", "-2000");
    sectionAnimateFunction(javascriptDiv, "0.8s", "-2000");
    sectionAnimateFunction(webDesignDiv, "", "2000");
    sectionAnimateFunction(responsiveDiv, "0.5s", "2000");
    sectionAnimateFunction(bootstrapDiv, "0.8s", "2000");
  }
});

let programmingLearning = document.getElementsByClassName(
  "programmingLearning"
)[0];

let teachersShowOne = document.getElementsByClassName("teachersShowOne")[0];
let teachersShowTwo = document.getElementsByClassName("teachersShowTwo")[0];
let teachersIntroduction = document.getElementsByClassName(
  "teachersIntroduction"
)[0];
let widthOfProgrammingLearning = programmingLearning.offsetWidth;
let clearForTeachersShow;

let homeUnderLine = document.getElementsByClassName("homeUnderLine")[0];
let underlineMenuActive = document.getElementsByClassName(
  "underlineMenuActive"
)[0];
let headerMenu = document.getElementsByClassName("headerMenu")[0];
underlineMenuActive.style.marginLeft = homeUnderLine.offsetLeft + "px";
underlineMenuActive.style.width = homeUnderLine.offsetWidth + "px";
let headerUnderlineChecker;

window.addEventListener("resize", () => {
  widthOfProgrammingLearning = programmingLearning.offsetWidth;
  if (headerUnderlineChecker == undefined) {
    underlineMenuActive.style.marginLeft = homeUnderLine.offsetLeft + "px";
    underlineMenuActive.style.width = homeUnderLine.offsetWidth + "px";
  } else {
    underlineMenuActive.style.marginLeft =
      headerUnderlineChecker.offsetLeft + "px";
    underlineMenuActive.style.width = headerUnderlineChecker.offsetWidth + "px";
  }
});

let runTeachersShowSlider = () => {
  clearForTeachersShow = setInterval(() => {
    let teachersShowActive =
      document.getElementsByClassName("teachersShowActive")[0];
    if (widthOfProgrammingLearning != 0) {
      teachersShowActive.classList.remove("teachersShowActive");
      teachersShowTwo.classList.add("teachersShowActive");
      teachersIntroduction.style.transform = `translate(-${widthOfProgrammingLearning}px)`;
      widthOfProgrammingLearning = 0;
    } else if (widthOfProgrammingLearning == 0) {
      teachersShowActive.classList.remove("teachersShowActive");
      teachersShowOne.classList.add("teachersShowActive");
      teachersIntroduction.style.transform = `translate(-${widthOfProgrammingLearning}px)`;
      widthOfProgrammingLearning = programmingLearning.offsetWidth;
    }
  }, 4000);
  return clearForTeachersShow;
};

runTeachersShowSlider();
teachersShowOneAndTwo = (pixel, showNumber) => {
  clearInterval(clearForTeachersShow);
  let teachersShowActive =
    document.getElementsByClassName("teachersShowActive")[0];
  teachersIntroduction.style.transform = `translate(${pixel}px)`;
  teachersShowActive.classList.remove("teachersShowActive");
  showNumber.classList.add("teachersShowActive");
  runTeachersShowSlider();
};

teachersShowOne.addEventListener("click", () => {
  teachersShowOneAndTwo(0, teachersShowOne);
  widthOfProgrammingLearning = programmingLearning.offsetWidth;
});

teachersShowTwo.addEventListener("click", () => {
  teachersShowOneAndTwo("-" + widthOfProgrammingLearning, teachersShowTwo);
});

// forPhoto

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 1000,
    disableOnIteraction: false,
  },
});

let clickHeaderMenu = document.getElementsByClassName("clickHeaderMenu");
for (let i = 0; i < clickHeaderMenu.length; i++) {
  clickHeaderMenu[i].addEventListener("click", (e) => {
    headerUnderlineChecker = e.target;
  });
}

let mobileMenuIcon = document.getElementsByClassName("mobileMenuIcon")[0];
let mobileMenuNavi = document.getElementsByClassName("mobileMenuNavi")[0];
mobileMenuIcon.addEventListener("click", () => {
  mobileMenuNavi.style.transform = "translate(0)";
  mobileMenuIcon.style.display = "none";
});

let mobileMenuXicon = document.getElementsByClassName("mobileMenuXicon")[0];
mobileMenuXicon.addEventListener("click", () => {
  mobileMenuNavi.style.transform = "translate(-5000px)";
  mobileMenuIcon.style.display = "block";
});


