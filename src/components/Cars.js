import React from 'react'

function Cars({nom , color, year ,sortie}) { 
    const colorInfo = color ? (<p>couleur : {color} </p>) : (<p>couleur : Néant </p>) ;
    
    if(nom){
        return (
            <div className='cars'>
                <p>Marque : {nom} </p>
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