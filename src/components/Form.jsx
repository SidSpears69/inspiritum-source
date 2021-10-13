import styles from "./Form.module.css";
import Radio from "./Radio/Radio";
import classNames from "classnames";

const Form = ({ props }) => {
    const radios = props.radios.items.map(radio => (<Radio key={radio.id} value={radio.value} id={radio.id} name={props.radios.name} img={radio.img} onChange={props.radios.onChange} isChecked={props.currentValue === radio.value} className={props.cssClass} />))
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            <div className={styles.indicator}>
                <progress value={props.step} max="15" aria-label={"Вы на шаге " + props.step} className={styles.progress}></progress>
            </div>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.text}>Выберите из вариантов</p>
            <div className={classNames(styles.radios, styles[props.cssClass])}>
                {radios}
            </div>
            <p className={styles.steps}>{props.step}/15</p>
            <button type="submit" className={styles.button} disabled={!props.currentValue}>Далее</button>
        </form>
    );
}
export default Form;