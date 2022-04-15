import { ButtonGroup, Button, Stack } from '@mui/material'
function MuiButtonGroup() {
    return (
        <Stack direction="column" gap={2}>
            <Stack direction="row">
                <ButtonGroup variant='contained'>
                    <Button>Text</Button>
                    <Button>Text 1</Button>
                    <Button>Text 2</Button>
                </ButtonGroup>
                <ButtonGroup variant='text'>
                    <Button>Text</Button>
                    <Button>Text 1</Button>
                    <Button>Text 2</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ButtonGroup size='small'>
                    <Button>Text</Button>
                    <Button>Text 1</Button>
                    <Button>Text 2</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ButtonGroup orientation='vertical'>
                    <Button>Text</Button>
                    <Button>Text 1</Button>
                    <Button>Text 2</Button>
                </ButtonGroup>
            </Stack>

        </Stack>
    )
}

export default MuiButtonGroup