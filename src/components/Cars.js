import React from 'react'

function Cars({children , color, year ,sortie}) { 
    const colorInfo = color ? (<p>couleur : {color} </p>) : (<p>couleur : Néant </p>) ;
    
    if(children){
        return (
            <div className='cars'>
                <p>Marque : {children} </p>
                <p>Age : {year} </p>
                <p>Annee de sortie : {sortie} </p>
                {colorInfo}
            </div>
          )
    } else{
        return null ;
    }

}

export default Cars