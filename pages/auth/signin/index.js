import { Formik } from 'formik'
import axios from 'axios'
import { useRouter, userRouter } from 'next/router'

import {
    Box,
    Container,
    Typography,
    Button,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
    CircularProgress,
    
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import {initialValues,validationSchema} from './formValues'
import  useToasty  from '../../../src/contexts/Toasty'

import useStyles from './styles'


const Signin = () => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasty()

    const handleFormSubmit = async values => {
        
    }

    return(
        <TemplateDefault>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={handleFormSubmit}
            >

                
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        

                    }) => {

                            return(
                                <form onSubmit={handleSubmit}>  
                                    <Container maxWidth="sm" >
                                        <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                            Acesse a sua conta
                                        </Typography>
                                       
                                    </Container>    
                                    <br/>   
                                    <Container maxWidth="md" className={classes.boxContainer} >
                                        <Box className={classes.box}>
                                                                    
                                            <FormControl error={errors.email && touched.email} fullWidth>
                                                <InputLabel className={classes.inputLabel}>E-mail</InputLabel>   
                                                <Input
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}                                           
                                                    type="email"
                                                />
                                                <FormHelperText>
                                                    {errors.email && touched.email ? errors.email : null } 
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br /> 

                                            <FormControl error={errors.password && touched.password} fullWidth>
                                                <InputLabel className={classes.inputLabel}>Senha</InputLabel>   
                                                <Input
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}    
                                                    type="password"
                                                
                                                />
                                                <FormHelperText>
                                                    {errors.password && touched.password ? errors.password : null }
                                                </FormHelperText>
                                            </FormControl>
                                            <br/><br/>

                                                                                
                                            {
                                                isSubmitting
                                                ? (
                                                    <CircularProgress className={classes.loading} />
                                                ) : (
                                                    <Button 
                                                        type="submit" 
                                                        variant="contained"
                                                        color="primary" 
                                                        fullWidth
                                                        
                                                        >
                                                    Entrar
                                                    </Button>     
                                                )
                                            }

                                            
                                            <br/><br/>
                                            
                                        </Box>    
                                    </Container>      
                
                          
                        </form>           
                    )
                  } 
                }
             
            </Formik>
        </TemplateDefault>
    )
}

export default Signin