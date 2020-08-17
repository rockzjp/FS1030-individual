import React from 'react';
import  './Styles.scss';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({label, ...props}) =>{
      const [field, meta] = useField(props);

      return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}

          </>
      )
}



const CustomCheckbox = ({children, ...props}) =>{
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
        <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}

      </>
  )
}



const CustomSelect = ({label, ...props}) =>{
  const [field, meta] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}

      </>
  )
}


function ContactForm() {
  return (
   
    <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: false,
          specialPower: '',
        }}

        validationSchema={Yup.object({
           name: Yup.string()
              .min(3, 'At least 3 Char Please')
              .max(15, '15 chart or less Please')
              .required('Required'),
           
           email: Yup.string()
               .email('Invalid email')
               .required('Required'),
           
           acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms'),

           
           specialPower: Yup.string()
              .oneOf(['bear', 'wolf', 'tiger', 'eagle'], 'Invalide Special Power')
              .required('Required'),

        })}

        onSubmit={(values, {setSubmitting,resetForm}) => {
          setTimeout(() =>{
                alert(JSON.stringify(values,null,2));
                resetForm();
                setSubmitting(false);
          }, 1000)

        }}
    
    
    >
    

    {props => (
      <Form>
        <h1>Contact Me</h1>
        <CustomTextInput label="Name" name="name" type="text" placeholder="Your Name" />
        <CustomTextInput label="Email" name="email" type="email" placeholder="anyone@123.com" />
        <CustomSelect label="Special Power" name="specialPower">
          <option value="">Select a Special Power</option>
          <option value="bear">bear</option>
          <option value="wolf">wolf</option>
          <option value="tiger">tiger</option>
          <option value="eagle">eagle</option>
        </CustomSelect>
        <CustomCheckbox name="acceptedTerms">
           I accept the terms
        </CustomCheckbox>
        <button type="submit">{props.isSubmitting ? 'Loading' : 'Submit'}</button>
      </Form>

    )}
    </Formik>
   
  );
}

export default ContactForm;
