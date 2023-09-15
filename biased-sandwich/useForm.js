
import { useState } from 'react';

const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  return { formValues, handleChange };
};

export default useForm;
