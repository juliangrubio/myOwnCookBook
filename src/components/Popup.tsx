import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box } from '@mui/material';
import { ActionButton } from './ActionButton';
import { CloseIcon } from '../icons';

interface Props {
    title: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    children?: ReactNode,
}

export const Popup = ({ title, size = 'sm', children }: Props) => {

    // const dispatch = useDispatch();
    // const { statusPopup } = useSelector(state => state.system);

    return (

        <Dialog
            open={true}
            maxWidth={size}
            fullWidth={true}
            sx={{
                padding: 2,
                // minHeight: (isMobile) ? '100vh' : 'unset'
            }}
        >
            <DialogTitle
                // className={classes.dialogTitle} 
                sx={{
                    ml: 2,
                    padding: 1,
                    zIndex: 10,

                }}
            >
                <div style={{
                    display: 'flex',
                }}>
                    <Typography
                        variant="h6"
                        mt={1}
                        component="div"
                        style={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    {/* <Controls.ActionButton
                        color="secondary"
                        onClick={() => { dispatch(startClosePopup()) }}>
                        <CloseIcon />
                    </Controls.ActionButton> */}
                    <ActionButton
                        color="secondary"
                        onClick={() => {

                        }}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

/* 
const Child = (props) => {
    return <p>{props.text}</p>
};

const Parent = (props) => {
  // children is a property on every React component's props and
  // refers to the React components nested within the Parent component
  return <div> {props.children} </div>
};


const Main = () => {

  return (
    <Parent>
      <Child text={"Hello World"}</Child
      <Child text={"I am a child component"}</Child
      <Child text={"Parent renders as many Child components as are provided"}</Child>
    </Parent>
  ); 

};
*/
