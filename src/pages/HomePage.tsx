import React from 'react'
import DateDisplay from '../components/DateDisplay'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div>{/** intro panel */}</div>
            <div>{/** three logos row */}</div>
            <div>{/** main logo details */}</div>
            <div>{/** wrong/correct logo usage */}</div>
            <div>{/** color palette */}</div>
            <div>{/** logo application photo mosaic */}</div>
            <div>{/** brand history */}</div>
            <div>{/** logo variations */}</div>
            <div>{/** contacts card */}</div>
            <div>{/** versioning */}</div>
        </div>
    )
}

export default HomePage
