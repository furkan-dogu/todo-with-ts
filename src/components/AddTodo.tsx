import { Box, Button, TextField } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from 'react';

interface IAddTodo {
  todoAdd:AddFunc
}

const AddTodo = ({todoAdd}:IAddTodo) => {
  const [text, setText] = useState("")

  const handleClick = () => {
    todoAdd(text)
    setText("")
  }
  return (
    <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "flex-start", sm: "center" },
          m: { xs: 1, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="New Todo"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          disabled={!text.trim()}
          startIcon={<ListAltIcon />}
          onClick={handleClick}
        >
          add
        </Button>
      </Box>
  )
}

export default AddTodo