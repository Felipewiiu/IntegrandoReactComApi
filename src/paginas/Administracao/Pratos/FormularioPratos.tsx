import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import http from '../../../HTTP'
import ITag from '../../../interfaces/ITag'

export default function FormularioPratos() {
    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tags, setTags] = useState<ITag[]>([])
    const [tag, setTag] = useState('')

    useEffect(() =>{
        http.get< {tags: ITag[]} >('tags/')
            .then(resposta => setTags(resposta.data.tags))
    },[])

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

    }


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , flexGrow: 1}}>
        <Typography component={"h1"} variant={'h6'}>Formulário de pratos</Typography>
        <Box component={'form'} onSubmit={aoSubmeterForm} sx={{width:'100%'}}>
            <TextField
                value={nomePrato}
                onChange={evento =>
                    setNomePrato(evento.target.value)}
                label="Nome do prato"
                variant="standard"
                fullWidth
                required
                margin='dense'
            />
            <TextField
                value={descricao}
                onChange={evento =>
                    setDescricao(evento.target.value)}
                label="Descrição"
                variant="standard"
                fullWidth
                required
                margin='dense'
            />

            <FormControl margin='dense' fullWidth>
                <InputLabel id="select-tag">Tag</InputLabel>
                <Select labelId='select-tag' value={tag} onChange={evento => setTag(evento.target.value)}>
                    {tags.map(tag => <MenuItem key='tag.id' value={tag.id}> {tag.value}</MenuItem>)}
                </Select>
            </FormControl>
            <Button sx={{ marginTop: 1 }} type='submit' variant="outlined" fullWidth >Salvar</Button>
        </Box>
    </Box>
    )
}
