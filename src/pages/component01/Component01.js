import { useEffect, useRef } from 'react';
import styles from './Component01.module.css'
import gsap from 'gsap';

function Component01() {
  const color = useRef([]);

  useEffect(() => {
    gsap.to(color.current[0], {
      duration: 1.5,
      y: 100,
      onStart(){
        console.log(color.current);
      },
    })
  }, [])

  return (
    <div className={styles.stage}>
      <h1>애니메이션 재생 전</h1>
      {
        ['orange', 'green', 'pink', 'blue'].map((item, index) => (
          <div key={index} className={styles[item]}  ref={(el) => (color.current[index] = el)}></div>
        ))
      }
    </div>
  );
}

export default Component01;