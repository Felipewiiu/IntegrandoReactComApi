import { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import IRestaurante from '../../../interfaces/IRestaurante'
import { Link } from 'react-router-dom'
import http from '../../../HTTP'


export default function AdministracaoRestaurantes() {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    

    useEffect(() => {
        http.get('restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })

    }, [])

    const excluir = (restauranteASerExcluido: IRestaurante) =>{
        http.delete(`restaurantes/${restauranteASerExcluido.id}/`)
        .then(() =>{
            const listaDeRestaurante = restaurantes.filter(
                restaurante => restaurante.id !== restauranteASerExcluido.id)
                setRestaurantes([...listaDeRestaurante])
                
        })
    }

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
                        <TableCell>
                            Excluir
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
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
