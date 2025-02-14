import { useState } from 'react'

interface Title {
    title?: string
}

function DynamicTitle({title}: Title) {


    return (
        <h1>{title}</h1>
    )

}

export default DynamicTitle