import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    return (
        <div className='py-4 mb-8'>
            <h1 className='flex justify-center items-center text-2xl py-5'>Days I code</h1>
            <div className='flex justify-center py-2'>
                <GitHubCalendar
                    username="mansi0829"
                    blockSize={15}
                    blockMargin={5}
                    color="#A9A9A9"
                    fontSize={16}
                />
            </div>
        </div>
    )
}

export default Github