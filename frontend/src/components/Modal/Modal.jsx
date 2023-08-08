'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function DefaultModal({item,}) {
    const [openModal, setOpenModal] = useState('');
    const props = { openModal, setOpenModal };

    return (
        <>
            <Button
                onClick={() => props.setOpenModal('default')}
                // className='w-full transparent'
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-200 rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-200 w-full"
                gradientMonochrome="pink"
            >
              <p className='w-full bg-transparent'> Ver receta!</p>
            </Button>
            <Modal
                show={props.openModal === 'default'}
                onClose={() => props.setOpenModal(undefined)}
            >
                <Modal.Header>{item.name}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                           {item.recepy}
                            {/* The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them. */}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="bg-color-main-dark text-gray-200 text-md font-semibold hover:text-gray-300 hover:bg-color-main"
                        
                        pill
                        onClick={() => props.setOpenModal(undefined)}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
