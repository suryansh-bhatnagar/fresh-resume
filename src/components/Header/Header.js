import React , {useEffect , useRef} from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume.svg";

const Header = (props) => {
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);
  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          {" "}
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          {" "}
          Make your own resume <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume Svg" />
      </div>
    </div>
  );
};

export default Header;
