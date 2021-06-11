import { makeStyles, createStyles } from '@material-ui/core/styles';

import ImageCard from "./ImageCard";
import places from '../static/places';

import useWindowPosition from '../hook/useWindowPosition';

//Because of this, using the createStyles helper function to construct your style rules object is recommended:
const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    },
}));

export default function Header() {

    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            {/* <ImageCard place={places[1]} checked={checked} /> */}
            <ImageCard place={places[0]} checked={checked} />
        </div>
    )

}
