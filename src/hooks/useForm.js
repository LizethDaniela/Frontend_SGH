import { useState } from "react";

export const useForm = (initForm) => {
    const [form, setForm] = useState(initForm);
    const handlerChangeForm = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    };
    const handlerResetForm = () => {
        setForm("");
    };
    return [form, handlerChangeForm, handlerResetForm];
};