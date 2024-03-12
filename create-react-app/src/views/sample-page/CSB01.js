import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Grid from '@mui/system/Unstable_Grid/Grid';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
//import Stack from '@mui/material/Stack';

function CSB01() {
    const [StudentID, setStudentID] = useState('');

    const handleChange = (event) => {
        setStudentID(event.target.value);
    };

    const [openDialog, setOpenDialog] = useState(false);

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
                            <Box
                                component="form"
                                sx={{
                                    marginTop: 8,
                                    display: 'block',
                                    flexDirection: 'column',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid container alignItems="center" justifyContent="center" sx={{ml:20}}>
                                    <Grid item>
                                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                                            <Typography fontSize='18px'>
                                                <b>แบบฟอร์มเสนอหัวข้อโครงงานพิเศษ</b><br></br>
                                            </Typography>
                                            <Typography fontSize='18px'>
                                                <b>โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ</b><br></br>
                                            </Typography>
                                            <Typography fontSize='18px'>
                                                <b>คณะวิทยาศาสตร์ประยุกต์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</b>
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Stack alignItems="center" justifyContent="center" spacing={1} sx={{mt:5, ml:35}}>
                                        <Typography
                                            fontSize='18px'
                                            // sx={{
                                            //     marginTop: 5,
                                            //     marginLeft: 50,

                                            // }}
                                        >
                                            รหัสนักศึกษา คนที่ 1
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            ชื่อ - สกุล คนที่ 1
                                            <Box
                                                sx={{
                                                    minWidth: 180,
                                                    marginTop: 1,
                                                    marginLeft: 3,
                                                    display: "flex",
                                                }}
                                            >
                                                <FormControl
                                                    sx={{
                                                        minWidth: 180,
                                                        marginRight: 33,
                                                    }}>
                                                    <InputLabel id="StudentID-select-label-1">รหัสนักศึกษา</InputLabel>
                                                    <Select
                                                        labelId="StudentID-select-label-1"
                                                        id="StudentID-select"
                                                        value={StudentID}
                                                        label="รหัสนักศึกษา"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={13}>6304062620061</MenuItem>
                                                        <MenuItem value={13}>6304062620077</MenuItem>
                                                        <MenuItem value={13}>6304062620023</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <TextField
                                                    disabled
                                                    id="Name"
                                                    label="ชื่อ - สกุล"
                                                    defaultValue="ชื่อ - สกุล" //ชื่อจะดึงข้อมูลมาจากรหัสนักศึกษา
                                                />
                                            </Box>
                                        </Typography>
                                        <Typography
                                            fontSize='18px'
                                            sx={{
                                                marginTop: 5,
                                                marginLeft: 50,

                                            }}>
                                            รหัสนักศึกษา คนที่ 2
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            ชื่อ - สกุล คนที่ 2
                                            <Box
                                                sx={{
                                                    minWidth: 180,
                                                    marginTop: 1,
                                                    marginLeft: 3,
                                                    display: "flex",
                                                }}
                                            >
                                                <FormControl
                                                    sx={{
                                                        minWidth: 180,
                                                        marginRight: 33,
                                                    }}>
                                                    <InputLabel id="StudentID-select-label-2">รหัสนักศึกษา</InputLabel>
                                                    <Select
                                                        labelId="StudentID-select-label-2"
                                                        id="StudentID-select"
                                                        value={StudentID}
                                                        label="รหัสนักศึกษา"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={13}>6304062620061</MenuItem>
                                                        <MenuItem value={13}>6304062620077</MenuItem>
                                                        <MenuItem value={13}>6304062620023</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <TextField
                                                    disabled
                                                    id="Name"
                                                    label="ชื่อ - สกุล"
                                                    defaultValue="ชื่อ - สกุล" //ชื่อจะดึงข้อมูลมาจากรหัสนักศึกษา
                                                />
                                            </Box>
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <div>
                                    <Typography
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 50,

                                        }}>
                                        ชื่อโครงงานภาษาอังกฤษ
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { width: '75ch' },
                                                marginTop: 1,
                                                marginLeft: 3,
                                                display: "flex",
                                            }}
                                        >
                                            <TextField
                                                required
                                                id="Project-name"
                                                label="ชิ่อโครงงานภาษาอังกฤษ"
                                                defaultValue="Project name"
                                            />
                                        </Box>
                                    </Typography>
                                </div>
                                <div>
                                    <Typography
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 50,
                                        }}
                                    >
                                        มีอาจารย์ที่ปรึกษาหรือไม่ ?
                                    </Typography>
                                    <FormControl
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 0,
                                            marginLeft: 55,
                                        }}
                                    >
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Yes" control={<Radio />} label="มี" />
                                            <FormControlLabel value="No" control={<Radio />} label="ไม่มี" sx={{ marginLeft: 10 }} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div>
                                    <Typography
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 50,
                                        }}
                                    >
                                        โครงงานนี้จัดอยู่ในประเภท
                                    </Typography>
                                    <FormGroup
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 0,
                                            marginLeft: 55,
                                        }}
                                    >
                                        <FormControlLabel control={<Checkbox />} label="Networks & Data Communications" />
                                        <FormControlLabel control={<Checkbox />} label="Graphics & Animation" />
                                        <FormControlLabel control={<Checkbox />} label="Database & Web" />
                                        <FormControlLabel control={<Checkbox />} label="Artificial Intelligence" />
                                        <FormControlLabel control={<Checkbox />} label="Games" />
                                        <FormControlLabel control={<Checkbox />} label="Other" />
                                    </FormGroup>
                                </div>
                                <div>
                                    <Typography
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 50,
                                        }}
                                    >
                                        รายละเอียดของโครงงานที่จะพัฒนา
                                    </Typography>
                                    <Box
                                        sx={{
                                            '& .MuiTextField-root': { width: '85ch' },
                                        }}
                                    >
                                        <TextField
                                            fontSize='18px'
                                            sx={{
                                                marginTop: 0,
                                                marginLeft: 55,
                                            }}
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            maxRows={8}
                                        />
                                    </Box>
                                </div>
                                <div>
                                    <Typography
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 50,
                                        }}
                                    >
                                        เครื่องมือและอุปกรณ์ที่ใช้ในการทำโครงงานนี้
                                    </Typography>
                                    <Box
                                        sx={{
                                            '& .MuiTextField-root': { width: '85ch' },
                                        }}
                                    >
                                        <TextField
                                            fontSize='18px'
                                            sx={{
                                                marginTop: 0,
                                                marginLeft: 55,
                                            }}
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            maxRows={8}
                                        />
                                    </Box>
                                </div>
                                <div>
                                    <Stack
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize='18px'
                                        sx={{
                                            marginTop: 5,
                                            marginLeft: 45
                                        }}
                                    >
                                        <Button variant="contained" onClick={handleSubmit}>
                                            ยืนยัน
                                        </Button>
                                    </Stack>
                                </div>
                                <Dialog open={openDialog} onClose={handleCloseDialog}>
                                    <DialogTitle>ทำการบันทึกสำเร็จ !!</DialogTitle>
                                    <DialogContent>
                                        <p>รอการตรวจสอบจากเจ้าหน้าที่</p>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseDialog}>Close</Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
}
export default CSB01