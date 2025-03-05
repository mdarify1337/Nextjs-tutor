"use client"

import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { useTheme } from '../components/themeprovider'
import { ClientSideFunction } from '../utils/client-utils'

function ClientRouteComponent() {
    const theme = useTheme();
    const result = ClientSideFunction();
    return (
        <div style={{ color: theme.colors.primary }}>
            Client Route Component
            <p>{result}</p>
            <ImageSlider />
        </div>
    )
}

export default ClientRouteComponent
