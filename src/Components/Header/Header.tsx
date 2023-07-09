import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ProfileComponent from './ProfileComponent';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar style={{paddingBottom:"2em", paddingTop: "1em"}}>
        <ProfileComponent/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
