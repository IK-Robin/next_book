import TextField from '@mui/material/TextField';

export default function BasicTextFields({label,component,type,placehoder}) {
  return (
   
   <div >
     <TextField placeholder={placehoder} sx={{margin:'1'}} fullWidth size='small' type = { type}id="outlined-basic" label={label} variant="outlined" />
   </div>
  );
}
