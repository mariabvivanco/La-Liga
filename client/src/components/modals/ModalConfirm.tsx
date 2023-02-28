//Modal genérico pero que en estos momentos se usa para cuando se introduce una contraseña incorrecta

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
    imag?:string,
    act:()=>void;
  }

const ModalConfirm: React.FC<ModalErrorProps>  = ({setShow, show, title, text, imag, act}) => {
    return(
        <Modal onClose={setShow} size='xs' isOpen={show}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  color="orange" >{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imag}></Image>
            {text}
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>setShow(false)}>Cancelar</Button>
            <Button colorScheme="teal"
                    ml={10}
                    variant="solid" 
                    onClick={()=>{act(); setShow(false)}}>Confirmar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default ModalConfirm