//Componentes
import Dialog from '@mui/material/Dialog';

const ModalBase = ({handleClose, open , children}) => {
//return
    return(
        <div>
            <Dialog onClose={handleClose} open={open} maxWidth='md'>
                {children}
            </Dialog>
        </div>
    )
}
export default ModalBase