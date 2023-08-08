/* eslint-disable react/prop-types */
import cerrarBTN from "../img/cerrar.svg"
import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";

function Modal({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGastos,
    gastoEditar,
    setGastoEditar
}) {
    const [mensaje, setMensaje] = useState("")

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [fecha, setfecha] = useState("")

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setfecha(gastoEditar.fecha)
        }
    }, [])

    const handleCerrar = () => {
        setAnimarModal(false)
        setGastoEditar({})

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son requeridos")
            return
        }

        setMensaje("")

        guardarGastos({
            id,
            nombre,
            cantidad,
            categoria,
            fecha
        })
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={cerrarBTN}
                    alt="Imagen de cerrar"
                    onClick={handleCerrar}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>{gastoEditar.nombre ? "Modificar Gasto" : "Nuevo Gasto"}</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade cantidad"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione una Categoria-- </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? "Actualizar" : "Añadir Gasto"} />

                {
                    mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>
                }
            </form>
        </div>
    )
}

export default Modal