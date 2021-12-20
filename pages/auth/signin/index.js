import Image from 'next/image'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter, userRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

 
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
import { Alert } from '@material-ui/lab'


const Signin = ({APP_URL}) => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasty()
    const { data: session } = useSession()


    console.log(session)

    const handleGoogleLogin = () => {
        signIn('google', {
           callbackUrl:`${APP_URL}/user/dashboard`    
        })
    }    

    const handleFormSubmit = async values => {
        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: 'http://localhost:3000/user/dashboard'
        })
        
    }

                   
    return(
        <TemplateDefault>
            <Container maxWidth="sm"  component="main" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Entre na sua conta
                </Typography>
            </Container> 
            
         
                                      
          <Container maxWidth="md" >
            <Box className={classes.box}>
                <Box display="flex" justifyContent="center">
                    <Button
                        variant = "contained"
                        color="primary"
                        startIcon= {
                            <Image
                            src="/images/logo.png"
                            width={20}
                            height={20}
                            alt="Login com Google"
                            />
                        }
                        onClick={handleGoogleLogin}
                    >
                       Entrar com Google
                    </Button> 
                </Box>
                <Box className={classes.orSeparator}>
                    <span>ou</span>
                </Box>


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
                                    {
                                        router.query.i === '1'
                                         ? (
                                             <Alert severity="error" className={classes.errorMessage}>
                                                 Usuario ou senha Invalidos
                                             </Alert>
                                         )
                                         : null
                                    }
                                  
                                                                    
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
                                            
                                          
                                      
                
                          
                        </form>           
                    )
                  } 
                }
             
                </Formik>
             </Box> 
          </Container>    
        </TemplateDefault>
    )
}

Signin.getServerSideProps = async function() {
    return{
        APP_URL: process.env.APP_URL
    }
}

export default Signin