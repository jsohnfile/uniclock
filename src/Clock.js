import React from 'react'

export default function Clock({minutes, hours, seconds, periodSymbol}) {

    return (
        <div className="clock">
            <div>{hours}:{minutes}:{seconds} {periodSymbol}</div>
        </div>
    )
}
