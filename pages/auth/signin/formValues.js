import * as yup from 'yup'

const initialValues = {
    
    email:'',
    password:'',


}

const validationSchema = yup.object().shape({
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    password: yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    
   
    
 
})


export {
    initialValues,
    validationSchema,
}
