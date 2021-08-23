import React, {useState, useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../store/AuthContext";
import firebase, { updateProfileData } from "../../firebase/firebase.utils";
import {
    Container,
    Typography,
    Button,
    FormControl,
    TextField,
    Grid,
    Modal,
    Fade,
  } from "@material-ui/core";
  import { CloudUpload } from "@material-ui/icons";

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginBottom: 20,
    },
    media: {
      height: 140,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const EditProfile = ({open, handleClose, }) => {
    const { user } = useContext(AuthContext);
    const classes = useStyles();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [location, setLocation] = useState(user.location);
    const [coverImage, setCoverImage] = useState(user.cover_image);
    const [profileImage, setProfileImage] = useState(user.profile_image);
    const [coverImageUploadMessage, setCoverImageUploadMessage] = useState("Upload");
    const [profileImageUploadMessage, setProfileImageUploadMessage] = useState("Upload");
    const fetchImageUrl = async (selectedFile, dest) => {
        const storageRef = firebase
          .storage()
          .ref(`restaurants/${user.id}/${dest}`);
        const uploadTask = storageRef.put(selectedFile);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED:
                if (dest === "cover_image") {
                    setCoverImageUploadMessage("Uploading...");
                }else{
                    setProfileImageUploadMessage("Uploading...");
                  }
                break;
              case firebase.storage.TaskState.RUNNING:
                 if (dest === "cover_image") {
                    setCoverImageUploadMessage("Uploading...");
                }else{
                    setProfileImageUploadMessage("Uploading...");
                  }
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
              if (dest === "cover_image") {
                setCoverImage(downloadURL)
                setCoverImageUploadMessage("Uploaded");
            }else{
                setProfileImage(downloadURL)
                setProfileImageUploadMessage("Uploaded");
              }
            });
          }
        );
      };
    
      const handleUploadCoverImage = async (e) => {
        const selectedFile = e.target.files[0];
        fetchImageUrl(selectedFile, "cover_image");
      };
      const handleUploadProfileImage = async (e) => {
        const selectedFile = e.target.files[0];
        fetchImageUrl(selectedFile, "profile_image");
      };
      const updateProfileHandler = async (e) => {
        const updateProfile = {  name, email, phone, location, cover_image: coverImage, profile_image: profileImage };
        updateProfileData(user.id, updateProfile)
        handleClose();
      };
    
    return (
        <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <Fade in={open}>
            <div className={classes.paper}>
                <Container>
                    <Typography variant="h5" component="h5" style={{ marginBottom: 10 }}>
                        Edit Profile
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
                            label="email"
                            type="email"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            disabled
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </FormControl>
                        <FormControl fullWidth style={{ marginBottom: 10 }}>
                        <TextField
                            label="Phone"
                            type="number"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            disabled
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        </FormControl>
                        <FormControl fullWidth style={{ marginBottom: 10 }}>
                        <TextField
                            label="Location"
                            type="text"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        </FormControl>
                        <br/>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: 20, marginBottom: 20 }}>
                        <div style={{ marginBottom: 10 }} className="upload-btn-wrapper">
                        <Typography component={"span"}>Upload Cover Image</Typography>
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            startIcon={<CloudUpload />}
                        >
                            {coverImageUploadMessage}
                        </Button>
                        <input
                            type="file"
                            name="image"
                            accept="image/gif, image/jpeg, image/png"
                            onChange={handleUploadCoverImage}
                        />
                        </div>
                        <div style={{ marginBottom: 10 }} className="upload-btn-wrapper">
                            <Typography component={"span"}>Upload Profile Image</Typography>
                            <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            startIcon={<CloudUpload />}
                        >
                            {profileImageUploadMessage}
                        </Button>
                        <input
                            type="file"
                            name="image"
                            accept="image/gif, image/jpeg, image/png"
                            onChange={handleUploadProfileImage}
                        />
                        </div>
                        </div>
                        <br/>
                        <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Button variant="contained" onClick={handleClose}>
                            Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                            color="primary"
                            variant="contained"
                            onClick={updateProfileHandler}
                            >
                            Update Profile
                            </Button>
                        </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        </Fade> 
        </Modal>
    )
}

export default EditProfile
