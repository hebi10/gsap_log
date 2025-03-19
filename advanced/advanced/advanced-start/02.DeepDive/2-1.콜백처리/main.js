const $ = node => document.querySelector(node);


//  callback -> 나중에 일어나는 일 

// onComplete
// onUpdate
// onStart
// onRepeat

const h1 = $('h1');

gsap.to(`.orange`, {
  duration: 1,
  y: 100,
  onComplete: complete,
  onCompleteParams: ["오렌지"],
  onUpdate() {
    h1.textContent = `애니메이션 작동 중`;
  },
  onStart() {
  },
})


function complete(color){
  console.log(this.targets()[0])
  h1.textContent = `${color} 애니메이션 재생 끝`;
}

class Tiger {
  constructor(target, name){
    this.animation = gsap.to(target, {
      x: 100,
      onComplete: this.complete,
      callbackScope: this,
    })
    this.animation.pause();
    this.name = name;
  }

  start(){
    this.animation.play();
  }

  complete(){
    console.log(this);
    this.rander();
  }

  rander(){
    h1.textContent = `${this.name} 애니메이션 재생 끝`
  }
}

const pink = new Tiger(".pink", "핑핑이");






















