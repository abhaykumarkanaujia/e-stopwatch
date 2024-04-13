import React, { useState } from 'react'

const Stopwatch = () => {
    //#region 

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, mseconds: "00" });
    const [itrvlId, setItrvlId] = useState(null);
    const [isOn, setIsOn] = useState(false);
    let [h, m, s, ms] = [time.hours, time.minutes, time.seconds, parseInt(time.mseconds)];


    const toggle = () => {
        isOn ? stop() : start();
    }

    const start = () => {
        setItrvlId(setInterval(() => {
            change();
        }, 10));
        setIsOn(true);
    }

    const change = () => {
        if (ms === 100) s++, ms = 0;
        if (s === 60) m++, s = 0;
        if (m === 60) h++, m = 0;
        ms++;
        setTime({ hours: h, minutes: m, seconds: s, mseconds: ms });
    }

    const reset = () => {
        stop();
        h = 0, m = 0, s = 0, ms = 0;
        setTime({ hours: h, minutes: m, seconds: s, mseconds: "00" });
    }

    const stop = () => {
        clearInterval(itrvlId);
        setIsOn(false);
    }

    //#endregion

    return (
        <>
            <div className='grid font-mono mt-5 md:mt-0 md:place-content-center md:h-screen bg-white'>

                <div className='flex flex-col px-4 md:px-14 py-8 border-2 border-b-4 border-b-[#ff6666] rounded bg-[#F9F9F9]'>
                    <h1 className='text-4xl  text-center'>Stopwatch</h1>

                    <div className='flex items-end justify-center my-8'>
                        <div className='flex gap-9 justify-between items-center'>
                            <div><div className='border-2 text-5xl rounded-md w-20 text-center bg-[#FFFFFF]'   >{time.hours}</div>  <h1 className='text-center text-sm mt-3'>Hours</h1></div>
                            <div><div className='border-2 text-5xl rounded-md w-20 text-center bg-[#FFFFFF]'   >{time.minutes}</div><h1 className='text-center text-sm mt-3'>Minutes</h1></div>
                            <div><div className='border-2 text-5xl rounded-md w-20 text-center bg-[#FFFFFF]'   >{time.seconds}</div><h1 className='text-center text-sm mt-3'>Seconds</h1></div>
                        </div>
                        <div><div className='border-2 text-sm rounded-md w-6 text-center mx-2 mb-8 bg-[#FFFFFF]'   >{time.mseconds}</div>
                        {/* <h1 className='text-[#F9F9F9] text-sm mt-3' >#</h1> */}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <button className='border-2 w-40 rounded m-2 p-1 text-center  text-[#FFFFFF] bg-[#03AE85]' onClick={toggle}>{isOn ? "Stop" : "Start"}</button>
                        <button className='border-2 w-40 rounded m-2 p-1 text-center  text-[#FFFFFF] bg-[#ff6666]' onClick={reset}>Reset</button>
                    </div>

                    <div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Stopwatch