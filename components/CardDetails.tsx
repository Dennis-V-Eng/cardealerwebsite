import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CardDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    return (
        <div>CardDetails</div>
    )
}

export default CardDetails