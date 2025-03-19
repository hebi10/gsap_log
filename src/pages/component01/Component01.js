import { useEffect, useRef } from "react";
import styles from "./Component01.module.css";
import gsap from "gsap";

function Component01() {
  const color = useRef([]);
  const titleRef = useRef(null);

  class Tiger {
    static test() {}

    constructor(target, name) {
      this.animation = gsap.to(target, {
        x: 100,
        onComplete: this.complete,
        callbackScope: this,
      });
      this.animation.pause();
      this.name = name;
    }

    start() {
      this.animation.play();
    }

    complete() {
      console.log(this);
      this.render();
    }

    render() {
      if (titleRef.current) {
        titleRef.current.textContent = `${this.name} 애니메이션 재생 끝`;
      }
    }
  }

  useEffect(() => {
    gsap.to(color.current[0], {
      duration: 1.5,
      y: 100,
      onStart() {
        console.log(color.current);
      },
    });

    // Tiger 인스턴스 생성 및 실행 테스트
    const tiger = new Tiger(color.current[0], "호랑이");
    setTimeout(() => {
      tiger.start();
    }, 2000);
  }, []);

  return (
    <div className={styles.stage}>
      <h1 ref={titleRef}>애니메이션 재생 전</h1>
      {["orange", "green", "pink", "blue"].map((item, index) => (
        <div
          key={index}
          className={styles[item]}
          ref={(el) => (color.current[index] = el)}
        ></div>
      ))}
    </div>
  );
}

export default Component01;
