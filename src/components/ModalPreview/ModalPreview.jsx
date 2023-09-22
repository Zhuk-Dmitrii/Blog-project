import { useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

export function ModalPreview ({show, close}) {
   const image = useSelector(state => state.imageModal.image)

   return (
      <>
         <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
               <Modal.Title>Image Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Image src={image} fluid />
            </Modal.Body>
         </Modal>
    </>
   )
}