import React from 'react'
import './card.css'

export default function Card({type, data, buttonText, result}) {
    const badgeColor = (txt) => {
        switch (txt) {
            case 'New':
                return ({backgroundColor:'red'});
            case 'Active':
                return ({backgroundColor:'blue'});
            default:
                return ({backgroundColor:'white'});
        }
    }


    const submit = (s) => {
        result(s)
    }

  return (
    <div>
        <div className='d-flex gap-2 mb-2'>
            {type}
            <div className="circle" style={badgeColor(type)}>
                <span className="circle__content">{data?.length}</span>
            </div>
        </div>

        {data?.map((i) =>
            <div className="shadow" key={i?.id}>
                <div className="card-body">
                    <p className="card-text text-secondary">Order #{i?.id}</p>
                    <p className="card-title">{i?.space?.name} {i?.pricelist?.name}</p>
                    <div className='d-flex'>
                        <p className="card-text text-secondary">{i?.items?.length} items</p>
                        <ul>
                            <li>€ {Number(i?.items?.reduce((a,v) => a = a + (v?.price * v?.quantity), 0))?.toFixed(2)}</li>
                        </ul>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>{i?.location}</h5>
                        <button className='btn btn-primary' onClick={() => {submit(i)}}>{buttonText} <span class="material-symbols-outlined align-middle">arrow_forward</span></button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
