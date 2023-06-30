import React from 'react'
import Gasto from './Gasto'

const ListadoDeGastos = ({
        gastos,
        setGastoEditar,
        eliminarGastos,
        filtro,
        gastosFiltrados
    }) => {
    return (
        <div className='listado-gastos contenedor'>
            

            {filtro ? (
                <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'Aun no hay Gastos en esta Categoria'}</h2>
                    {gastosFiltrados.map( gasto => (
                        <Gasto 
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGastos={eliminarGastos}
                        />
                ))}
                </>
            ) : (
                <>
                <h2>{gastos.length ? 'Gastos' : 'Aun no hay Gastos'}</h2>
                {gastos.map( gasto => (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGastos={eliminarGastos}
                    />
                ))}
            </>
        )
    }
        </div>
    )
}

export default ListadoDeGastos
