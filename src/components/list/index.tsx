import React from 'react'
import IArtist from '../../interfaces/artist'
import Card from '../card'
import Skeleton from '../skeleton'
import IListProps from './type'

const List = (props: IListProps<IArtist>) => {
    const { isLoading, data } = props

    return (
        <div className="list">
            {isLoading && (
                <div className="list__skeleton">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}
            {!isLoading && (
                <>
                    <div className="list__data">
                        {data.map(d => {
                            return <Card key={d.id} data={d} />
                        })}
                    </div>
                    <span className="list__not-found">
                        Can not find the artist? Try another keyword
                    </span>
                </>
            )}
        </div>
    )
}

export default List
