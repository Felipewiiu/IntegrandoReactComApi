import { AppBar, Box, Button, Link, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import http from '../../../HTTP'
import IRestaurante from '../../../interfaces/IRestaurante'

export default function FormularioRestaurante() {
    const parametros = useParams()
    const [nomeRestaurante, setNomeRestaurante] = useState('')

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(response => {
                    setNomeRestaurante(response.data.nome)
                })
        }
    }, [parametros])


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(response => {
                    alert('Restaurante atualizado com sucesso')
                })
        } else {

            http.post('restaurantes/', {
                nome: nomeRestaurante
            })
                .then(response => {
                    alert('Restaurante cadastrado com sucesso')
                })
        }

    }


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , flexGrow: 1}}>
        <Typography component={"h1"} variant={'h6'}>Formulário Restaurantes</Typography>
        <Box component={'form'} onSubmit={aoSubmeterForm} sx={{width:'100%'}}>
            <TextField
                value={nomeRestaurante}
                onChange={evento =>
                    setNomeRestaurante(evento.target.value)}
                label="Restaurante"
                variant="standard"
                fullWidth
                required
            />
            <Button sx={{ marginTop: 1 }} type='submit' variant="outlined" fullWidth >Salvar</Button>
        </Box>
    </Box>
    )
}
