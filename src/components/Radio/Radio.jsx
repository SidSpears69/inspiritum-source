import classNames from "classnames";
import styles from "./Radio.module.css";

function Radio({ value, id, name, img, onChange, isChecked, className }) {
    return (
        <div className={classNames(styles.radio, styles[className])}>
            <input type="radio" value={value} id={id} name={name} className={classNames(styles.input, 'visually-hidden')} onChange={onChange} checked={isChecked}/>
            <label htmlFor={id} className={styles.label}>
                {value}
                <img src={img} alt="" aria-hidden="true" className={styles.img}/>
            </label>
        </div>
    );
}

export default Radio;