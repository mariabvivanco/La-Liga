import React from "react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image
  } from '@chakra-ui/react'

  export interface ModalErrorProps {
    show:boolean,
    setShow: any,
    title:string,
    text:string,
    imag?:string
  }

const ModalError: React.FC<ModalErrorProps>  = ({setShow, show, title, text, imag}) => {
    return(
        <Modal onClose={setShow} size='xs' isOpen={show}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imag}></Image>
            {text}
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>setShow(false)}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default ModalError