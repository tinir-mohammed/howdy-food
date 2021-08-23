import React, { useState } from "react";
import firebase, { updateMenu } from "../../firebase/firebase.utils";
import {
  Container,
  Typography,
  Button,
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";

const EditMenu = (props) => {
  const { data } = props;
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [type, setType] = useState(data.type);
  const [available, setAvailable] = useState(data.available);
  const [image, setImage] = useState("");
  const [uploadMessage, setUploadMessage] = useState("Upload");

  const fetchImageUrl = async (selectedFile, dest) => {
    const storageRef = firebase
      .storage()
      .ref(`menus/${dest}/${data.id}/${selectedFile}`);
    const uploadTask = storageRef.put(selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            setUploadMessage("Uploading");
            break;
          case firebase.storage.TaskState.RUNNING:
            setUploadMessage("Uploading...");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setImage(downloadURL);
          setUploadMessage("Uploaded");
        });
      }
    );
  };

  const handleUploadImage = async (e) => {
    const selectedFile = e.target.files[0];
    fetchImageUrl(selectedFile, "menu-image");
  };

  const updateMenuHandler = () => {
    const newMenu = { id: data.id, name, price, type, available, image };
    updateMenu(newMenu);
    props.handleClose();
  };

  return (
    <Container>
      <Typography variant="h5" component="h5" style={{ marginBottom: 10 }}>
        Edit Menu here
      </Typography>
      <form>
        <FormControl fullWidth style={{ marginBottom: 10 }}>
          <TextField
            label="Name"
            type="text"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: 10 }}>
          <TextField
            label="Price"
            type="number"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Menu Type</FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <FormControlLabel value="Food" control={<Radio />} label="Food" />
            <FormControlLabel
              value="Beverage"
              control={<Radio />}
              label="Beverage"
            />
            <FormControlLabel
              value="Dessert"
              control={<Radio />}
              label="Dessert"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Availablity</FormLabel>
          <RadioGroup
            aria-label="available"
            name="available"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Available"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Not Available"
            />
          </RadioGroup>
        </FormControl>
        <div style={{ marginBottom: 10 }} className="upload-btn-wrapper">
          <Button
            color="primary"
            variant="contained"
            startIcon={<CloudUpload />}
          >
            {uploadMessage}
          </Button>
          <input
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            onChange={handleUploadImage}
          />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button variant="contained" onClick={props.handleClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              onClick={updateMenuHandler}
            >
              Update Menu
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditMenu;
