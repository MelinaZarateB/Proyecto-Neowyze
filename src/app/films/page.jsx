'use client'
import { useState } from "react"

export default function Films () {
    const [state, setState] = useState('')
    return(
        <div style={{backgoundColor: 'red'}}>
            <p style={{color: 'white'}}>Pagina de films</p>     
        </div>
    )
}