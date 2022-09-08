import React, { useState } from "react";

const ClockFunctional = () => {

    const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date())
    }

    setInterval(() => tick(), 1000);

    return (
        <div className="clock_functional">
            <h1>Realtime CLOCK</h1>
                <hr />
                <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default ClockFunctional;