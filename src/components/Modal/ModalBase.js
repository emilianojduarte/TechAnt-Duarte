//Componentes
import Dialog from '@mui/material/Dialog';
//Estilos
import './Modal.css';

const ModalBase = ({handleClose, open , children}) => {
    return(
        <div>
            <Dialog onClose={handleClose} open={open} maxWidth='md'>
                {children}
            </Dialog>
        </div>
    )
}
export default ModalBase