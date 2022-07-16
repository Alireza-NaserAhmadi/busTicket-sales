import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from' @material-ui/core/styles/createMuiTheme';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
direction: 'rtl',
fontFamily: 'BYekan',
});

const RTL=(props) =>{
        return (

            {props.children}

        );
}
export default RTL;