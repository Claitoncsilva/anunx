import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyle = makeStyles((theme) => ({
    container: {
        padding:theme.spacing(6, 0, 6)
    }
}))


const Default = ({ children}) => {
   const classes= useStyle()

    return(
        <>
            <Header />
                <Box className={classes.container}>
                { children }
                </Box>
         
            <Footer />   
        </>
    )
}

export default Default