import rectangular from "../assets/images/rectangular.svg";
import hourglass from "../assets/images/hourglass.svg";
import pear from "../assets/images/pear.svg";
import oval from "../assets/images/oval.svg";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { updateFigureActionCreator } from "../redux/form-reducer";

const Step2 = () => {
    const dispatch = useDispatch();
    const onRadioChange = (evt) => {
        const value = evt.target.value;
        let action = updateFigureActionCreator(value);
        dispatch(action);
    }
    const currentFigure = useSelector(state => state.form.figure);
    const onSubmitForm = (evt) => {
        evt.preventDefault();
    }
    const props = {
        'step': 2,
        'title': 'Какой формы ваша фигура?',
        'onSubmit': onSubmitForm,
        'cssClass': 'two-columns',
        'currentValue': currentFigure,
        'radios': {
            'name': 'figure',
            'onChange': onRadioChange,
            'items': [
                {
                    'id': 'rectangular',
                    'value': 'Прямоугольная',
                    'img': rectangular
                },
                {
                    'id': 'hourglass',
                    'value': 'Песочные часы',
                    'img': hourglass
                },
                {
                    'id': 'pear',
                    'value': 'Груша',
                    'img': pear
                },
                {
                    'id': 'oval',
                    'value': 'Овал',
                    'img': oval
                }
            ]
        }

    }
    return (
        <Form props={props} />
    );
}
export default Step2;