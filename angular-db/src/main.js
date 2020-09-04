const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // BODY :: RAW :: JSON
app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

const dbadduser = require("./db.add.user");




app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this

    let results = await dbadduser.addUser(input);
    console.log(results);
    res.json({ message: "success post" });
  } catch (err) {
    console.log(err)
    
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/update-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.updateuser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.get("/uploadblock", async (req, res) => {
  try {


  let results=  await dbadduser.uploadblock();
    res.json(results);
  } catch (err) {
    res.json({ opr: false });
  }
});


app.post("/forget-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.forgetuser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});



app.post("/sample", upload.none(), async (req, res) => {
  res.json(req.body);
});

  app.listen(3200);



  