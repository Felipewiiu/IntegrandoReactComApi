import { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import IRestaurante from '../../../interfaces/IRestaurante'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function AdministracaoRestaurantes() {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    console.log(restaurantes)

    useEffect(() => {
        axios.get('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })

    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => {
                        return (
                            <TableRow key={restaurante.id}>
                                <TableCell>
                                    {restaurante.nome}
                                </TableCell>
                                <TableCell>
                            [ <Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link> ]
                        </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
