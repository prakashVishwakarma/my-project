import { Button } from '@mui/material'
import React from 'react'

const SharedButton = ({ text, onClick }) => {
    return (
        <Button onClick={() => onClick()}
            className=" mt-8 px-8 z-30 py-2 bg-cyan-300 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#1976d2] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#1976d2;] hover:[text-shadow:2px_2px_2px_#1976d2] text-lg"
        >
            {text ? text : 'Add'}
        </Button>
    )
}

export default SharedButton
