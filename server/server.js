const express = require('express');
const mongoose = require('mongoose');
// const multer = require('multer');
const cors = require("cors");


const app = express();
app.use(cors());

const uri = "mongodb+srv://s6304062636120:sknk2563@cluster0.upocefc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connect to MongoDB");
}).catch((e) => console.log(e));

app.use(express.json());
app.use(cors())






// //ประเภทข้อมูลในดาต้าเบส
// const CheckAllStatusSchema = new mongoose.Schema({
//     _id: String,
//     gd_status: String,
//     fi_id: String,
//     createdAt: String,
//     updatedAt: String,
//   });
  
//   // ชื่อ table(graduate_checkings) ของ ดาต้าเบส
//   const checkallstatus = mongoose.model('Student', CheckAllStatusSchema);
//   const checkallstatus = mongoose.model('Student', CheckAllStatusSchema);
//   const checkallstatus = mongoose.model('Student', CheckAllStatusSchema);
  
//   // ดึงดาจ้าเบสมาใช้ ที่ส่วน Graduate
//   app.get('/CheckAllStatus', async (req, res) => {
//     try {
//       const CheckAllStatus = await checkallstatus.find();
//       res.json(CheckAllStatus);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });


// -----------------------------------------------------------------
// names2

const ns2Schema = new mongoose.Schema({
    _id: String,
    S_id: String,
    S_name: String,
});
const PS2Schema = new mongoose.Schema({
    _id: String,
    P_status: String,
});

const names2 = mongoose.model('FilePDF', ns2Schema);
const PS2 = mongoose.model('Project', PS2Schema);

app.post('/NAMES1', async (req, res) => {
    try {
        const NAMES2 = await names2.find();
        const PJS2 = await PS2.find();
        res.json(NAMES2);
        res.json(PJS2);

    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------



// -----------------------------------------------------------------
// names1

const ns1Schema = new mongoose.Schema({
    _id: String,
    S_id: String,
    S_name: String,
});
const PSSchema = new mongoose.Schema({
    _id: String,
    P_status: String,
});

const names1 = mongoose.model('FilePDF', ns1Schema);
const PS = mongoose.model('Project', PSSchema);

app.post('/NAMES1', async (req, res) => {
    try {
        const NAMES1 = await names1.find();
        const PJS = await PS.find();
        res.json(NAMES1);
        res.json(PJS);

    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------


// -----------------------------------------------------------------
// CSB03

const csb03Schema = new mongoose.Schema({
    _id: String,
    S_id: String,
    S_CSB03: String
});

const csb03 = mongoose.model('FilePDF', csb03Schema);

app.post('/CSB03', async (req, res) => {
    try {
        const CSB03 = await csb03.find();
        res.json(CSB03);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------


// -----------------------------------------------------------------
// UploadLinkTranscript2

const t2Schema = new mongoose.Schema({
    _id: String,
    F2_name: String,
    F2_date: String,
    F2_time: String,
    F2_status: String
});

const transcript2 = mongoose.model('FilePDF', t2Schema);

app.post('/Transcript2', async (req, res) => {
    try {
        const Transcript2 = await transcript2.find();
        res.json(Transcript2);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------

// -----------------------------------------------------------------
// CSB02

const csb02Schema = new mongoose.Schema({
    _id: String,
    S_id: String,
    S_CSB02: String
});

const csb02 = mongoose.model('FilePDF', csb02Schema);

app.post('/CSB02', async (req, res) => {
    try {
        const CSB02 = await csb02.find();
        res.json(CSB02);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------

// -----------------------------------------------------------------
// UploadLinkTranscript

const t1Schema = new mongoose.Schema({
    _id: String,
    F_name: String,
    F_date: String,
    F_time: String,
    F_status:String
});

const transcript = mongoose.model('FilePDF', t1Schema);

app.post('/Transcript', async (req, res) => {
    try {
        const Transcript = await transcript.find();
        res.json(Transcript);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Internal Server Error');
    }
});

// -----------------------------------------------------------------

app.get("/", async (req, res) => {
    res.send("Success yahhhhhh");
});

app.listen(9999, () => {
    console.log('server is running port 9999');
});