/* eslint-disable react/prop-types */
import { formatFecha } from "../helper/index"
import IcoAhorro from "../img/icono_ahorro.svg"
import IcoACasa from "../img/icono_casa.svg"
import IcoComida from "../img/icono_comida.svg"
import IcoGastos from "../img/icono_gastos.svg"
import IcoOcio from "../img/icono_ocio.svg"
import IcoSalud from "../img/icono_salud.svg"
import IcoSuscripciones from "../img/icono_suscripciones.svg"

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css';

const diccionarioIconos = {
    ahorro: IcoAhorro,
    comida: IcoComida,
    casa: IcoACasa,
    gastos: IcoGastos,
    ocio: IcoOcio,
    salud: IcoSalud,
    suscripciones: IcoSuscripciones
}

function Gasto({ gasto, setGastoEditar, eliminarGasto }) {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => eliminarGasto(gasto.id)}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={diccionarioIconos[gasto.categoria]} alt="Icono de gasto" />
                        <div className="descripcion-gasto">
                            <p className="categoria">{gasto.categoria}</p>
                            <p className="nombre-gasto">{gasto.nombre}</p>
                            <p className="fecha-gasto">{formatFecha(gasto.fecha)}</p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${gasto.cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto




