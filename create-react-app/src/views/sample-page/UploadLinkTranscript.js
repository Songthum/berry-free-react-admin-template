import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';

function UploadLinkTranscript() {
  // State to hold the value of the link
  const [linkValue, setLinkValue] = useState('');
  // State to manage the dialog open/close state
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle changes in the text field
  const handleLinkChange = (e) => {
    setLinkValue(e.target.value);
  };

  // Function to handle submission of the form (you can customize this according to your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the linkValue, such as redirecting to the provided link
    // For example: window.location.href = linkValue;
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}></Grid>
              <Container>
                <h1>ตรวจสอบคุณสมบัติยื่นโครงงาน</h1>
                <p>นักศึกษาโครงการพิเศษสองภาษาต้องลงทะเบียนเรียนวิชา 040613141 Special Project I <br></br>
                  ได้ผลการเรียนรวม ≥ 102 หน่วยกิต และได้ผลการเรียนรายวิชาภาคฯ 0406xxxxx ≥ 57 หน่วยกิต <br></br>
                  โดยใช้เอกสารใบรับรองผลการศึกษา (Transcript)</p>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography>
                    อัปโหลดลิงค์
                  </Typography>
                  {/* Text Field for Link */}
                  <TextField
                    label="Link"
                    value={linkValue}
                    onChange={handleLinkChange}
                    variant="outlined"
                  />

                  {/* Button to Show Popup */}
                  <Button variant="contained" onClick={handleSubmit}>ยืนยัน</Button>
                </Box>

                {/* Dialog Popup */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                  <DialogTitle>ทำการบันทึกลิงค์เรียบร้อยแล้ว !!</DialogTitle>
                  <DialogContent>
                    <p>คุณได้ทำการบันทึกลิงค์นี้:</p>
                    <p>{linkValue}</p>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default UploadLinkTranscript;
