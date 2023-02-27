import React from 'react';

const useModal = ({element, show}) => {
    
    const [showModal, setShowModal] = useState(show);
const toggle = () => {
    setShowModal((prev)=>!prev);
}
    const Modal = ({props}) => {
        return <Modal></Modal>
    }
    return [Modal]
};

export default useModal;