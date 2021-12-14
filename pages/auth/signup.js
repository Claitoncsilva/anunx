import { Formik } from 'formik'

import {
    Box,
    Container,
    Typography,
    Button,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
    
} from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'
import {initialValues,validationSchema} from './formValues'

import useStyles from './styles'


const Signup = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={(values) => {
                console.log('ok enviou o form',values)
              }}
            >

                
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        

                    }) => {

                            return(
                                <form onSubmit={handleSubmit}>  
                                    <Container maxWidth="sm" >
                                        <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                            Crie sua conta
                                        </Typography>
                                        <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                            E anuncie para toda Europa
                                        </Typography>
                                    </Container>    
                                    <br/>   
                                    <Container maxWidth="md" className={classes.boxContainer} >
                                        <Box className={classes.box}>
                                                                    
                                            <FormControl error={errors.name && touched.name} fullWidth>
                                                <InputLabel className={classes.inputLabel}>Nome</InputLabel>   
                                                <Input
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}                                                                                      
                                                />
                                                <FormHelperText>
                                                    {errors.name && touched.name ? errors.name : null }
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br /> 

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

                                            <FormControl error={errors.passwordConfirmation && touched.passwordConfirmation} fullWidth>
                                                <InputLabel className={classes.inputLabel}>Confirmação de senha</InputLabel>   
                                                <Input
                                                    name="passwordConfirmation"
                                                    value={values.passwordConfirmation}
                                                    onChange={handleChange}    
                                                    type="password"
                                                
                                                />
                                                <FormHelperText>
                                                    {errors.passwordConfirmation && touched.passwordConfirmation ? errors.passwordConfirmation : null }
                                                </FormHelperText>
                                            </FormControl>
                                            <br/><br/><br/>
                                            <Button 
                                              type="submit" 
                                              variant="contained"
                                              color="primary" 
                                              fullWidth
                                              className={classes.submit}
                                              >
                                                cadastrar
                                            </Button> 
                                            <br/><br/>
                                            <Typography component="span" variant="subtitle2" align="left" color="textPrimary">
                                                Já tem uma conta? Entre aqui
                                            </Typography>  
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

export default Signup