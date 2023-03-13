import { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import IRestaurante from '../../../interfaces/IRestaurante'
import { Link } from 'react-router-dom'
import http from '../../../HTTP'
import IPrato from '../../../interfaces/IPrato'


export default function AdministracaoPratos() {

    const [pratos, setPratos] = useState<IPrato[]>([])
    

    useEffect(() => {
        http.get('pratos/')
            .then(resposta => {
                setPratos(resposta.data)
            })

    }, [])

    const excluir = (pratoASerExcluido: IPrato) =>{
        http.delete(`restaurantes/${pratoASerExcluido.id}/`)
        .then(() =>{
            const listaDePratos = pratos.filter(
                prato => prato.id !== pratoASerExcluido.id)
                setPratos([...listaDePratos])
                
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
                            Descrição
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(prato => {
                        return (
                            <TableRow key={prato.id}>
                                
                                <TableCell>
                                    {prato.nome}
                                </TableCell>
                                <TableCell>
                                    {prato.tag}
                                </TableCell>
                                <TableCell>
                                    [ <a href={prato.imagem} target="_blank" rel='noreferrence'>Ver imagem</a> ]
                                </TableCell>
                                <TableCell>
                                    [ <Link to={`/admin/restaurantes/${prato.id}`}>Editar</Link> ]
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(prato)}>
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
