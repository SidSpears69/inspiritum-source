import woman from "../assets/images/woman.svg";
import man from "../assets/images/man.svg";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { updateSexActionCreator } from "../redux/form-reducer";
import { useHistory } from "react-router";

const Step1 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onRadioChange = (evt) => {
        const value = evt.target.value;
        const action = updateSexActionCreator(value);
        dispatch(action);
    }
    const onSubmitForm = (evt) => {
        evt.preventDefault();
        history.push('/step-2');
    }
    const currentSex = useSelector(state => state.form.sex);
    const props = {
        'step': 1,
        'title': 'Какого Вы пола?',
        'onSubmit': onSubmitForm,
        'currentValue': currentSex,
        'radios': {
            'name': 'sex',
            'onChange': onRadioChange,
            'items': [
                {
                    'id': 'woman',
                    'value': 'Женщина',
                    'img': woman
                },
                {
                    'id': 'man',
                    'value': 'Мужчина',
                    'img': man
                },
            ]
        }
    }
    return (
        <Form props={props} />
    );
}
export default Step1;