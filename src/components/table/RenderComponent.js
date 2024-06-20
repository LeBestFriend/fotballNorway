import React, { useState } from 'react'
import FetcherComponent from '../fetching/FetcherComponent'
import EliteserieTable from './EliteserieTable'

export default function RenderComponent({myUrl}) {
    const [data, setData] = useState(null)

    return (
        <div>
            <FetcherComponent setData={setData} myUrl={myUrl} />
            <EliteserieTable currentStandings={data} />
        </div>
    )
}
