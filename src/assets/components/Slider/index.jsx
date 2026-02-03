import Styles from './Slider.module.css';

function Slider() {
  return (
    <div className={Styles.carrousel}>
      <div className={Styles.slides}>
        <span className={Styles.slide}>
          Fluid. Expressive. Powerful. Move with us!
        </span>
        <span className={Styles.slide}>
          Masterclass Alert: Guest Choreographer Workshop This Saturday
        </span>
        <span className={Styles.slide}>
          New Contemporary Dance Classes Now Enrolling – Secure Your Spot
        </span>
      </div>
    </div>
  );
}

export default Slider;
