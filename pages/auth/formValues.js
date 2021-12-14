import * as yup from 'yup'

const initialValues = {
    name:'',
    email:'',
    password:'',
    passwordConfirmation:'',

}

const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    password: yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    
    passwordConfirmation: yup.string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem')
    
 
})


export {
    initialValues,
    validationSchema,
}

