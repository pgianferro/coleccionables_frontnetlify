import React from 'react';
const BACKEND_ADDRESS = 'coleccionablesrw-production.up.railway.app';


function ChartRow(props){
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    
    const deleteHandler = (e) => {
        e.preventDefault();
        
        if (user.name !== undefined) {
            alert('Estas por borrar chango!')

            fetch(`${BACKEND_ADDRESS}/api/products/${props.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }

    return (
                <tr>
                    <td>{props.sku}</td>
                    <td>{props.name}</td>
                    <td>${parseInt(props.price).toLocaleString('es-Ar')}</td>
                    <td>
                        <ul>
                            {props.categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>
                        <a className="btn btn-info" target="_blank" rel="noopener noreferrer" href={props.view}>Ver</a><br />
                        { 
                            user ?  
                            <button className="btn btn-danger text-white" target="_blank" rel="noopener noreferrer" onClick={deleteHandler}> Eliminar</button>
                            : ''
                        }
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;