import { useState } from 'react';
import s from './style.module.css';
import { Search as SearchIcon} from 'react-bootstrap-icons';

export const SerachBar = ({onSubmit}) => {

    const [value, setValue] = useState("");

    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value);
            setValue("");
        }
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <SearchIcon size={27} className={s.icon} />
            <input 
                className={s.input} 
                type='text'
                placeholder={"Search a tv show you may like"}
                value={value}
                onKeyUp={submit}
                onChange={handleChange}
            />
        </>
    )
}