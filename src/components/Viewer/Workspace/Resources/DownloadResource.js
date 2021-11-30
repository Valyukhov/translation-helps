import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
  TextField
} from '@material-ui/core';
import {
  DoneAll,
  ErrorOutline,
} from '@material-ui/icons';
import { DropzoneArea } from 'material-ui-dropzone';

import * as gitApi from '../../gitApi';

const Component = ({
  classes,
  
}) => {
  const [file, setFile] = React.useState(false)
  const [downloading, setDownloading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);
  const [url,setUrl] = useState('');
  const [organization,setOrganization] = useState('');
  const [repository,setRepository] = useState('');
  const [path,setPath] = useState('');
  
  const onChange = (event) =>{
   
    setUrl(event.target.value)
  }
  const onChangeOrg = (event) =>{
   
    setOrganization(event.target.value)
  }
  const onChangeLang = (event) =>{
   
    setRepository(event.target.value)
  }
  const onChangePath = (event) =>{
   
    setPath(event.target.value)
  }

  const subject = 'A special Resource ';
  const title = 'Download for Offline Use';

  const downloadingComponent = (
    <CircularProgress className={classes.progress} color="secondary" disableShrink />
  );
  const completeComponent = (
    <DoneAll />
  );
  const errorComponent = (
    <ErrorOutline />
  );
  let component = <div />;
  if (error) component = errorComponent;
  if (complete) component = completeComponent;
  if (downloading) component = downloadingComponent;
if (file.length>0){console.log(file[0].path)};
  return (
   <> <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {subject}
        </Typography>
        <Typography variant="h6" component="h3">
          {title}
        </Typography> 
        <DropzoneArea
        // showPreviews={true}
        // showPreviewsInDropzone={false}
        previewGridProps={{container: { spacing: 1, direction: 'row' }}}
  previewChipProps={{classes: { root: classes.previewChip } }}
  previewText="Selected files"
        acceptedFiles={['.zip']}
        useChipsForPreview
        maxFileSize={30000000}
        onChange={(e) =>setFile(e)}
     onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
     onDelete={(fileObj) => console.log('Removed File:', fileObj)}
     onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
  />
   <Button
          size="small"
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={()=>{
            setDownloading(true);
            
            
            gitApi.fetchSpecifiedZipFile({file, onProgress: (progress)=>{

            }})
            .then(response => {
              setDownloading(false);
              setComplete(true);
              console.log(response);
            })
            .catch(error => {
              setError(error);
              console.log({error});
            });
          }}
          
        >
          Download
        </Button>
        <form className={classes.root} noValidate autoComplete="off">
       
  <TextField onChange = {(e)=>onChange(e)}id="standard-basic" label="url" />
  
  </form><div>https://git.door43.org/ru_gl/ru_rob/archive/v1.zip</div>
  <TextField onChange = {(e)=>onChangeOrg(e)}id="standard-basic" label="organization" />
  <div>ru_gl</div>
  <TextField onChange = {(e)=>onChangeLang(e)}id="standard-basic" label="repo" />
  <div>ru_rob</div>
  <TextField onChange = {(e)=>onChangePath(e)}id="standard-basic" label="repo" />
  <div>08-RUT.usfm</div>
  <div>10-2SA.usfm</div>
  <div>57-TIT.usfm</div> 
      </CardContent>
      <CardActions className={classes.actions}>
        {component}
        <Button
          size="small"
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={()=>{
            setDownloading(true);
            
            
            gitApi.fetchSpecifiedZipFile({organization, repository,url, onProgress: (progress)=>{

            }})
            .then(response => {
              setDownloading(false);
              setComplete(true);
              console.log(response);
            })
            .catch(error => {
              setError(error);
              console.log({error});
            });
          }}
          
        >
          Download
        </Button>
        <Button
          size="small"
          variant="contained"
          
          color="primary"
          onClick={()=>{
            
            gitApi.getSpecifiedFileFromZip({repository,url,path})
            .then(response => {
              
              console.log({response});
            })
            .catch(error => {
              setError(error);
              console.log({error});
            });

          }}
            
        >
          Fetch
        </Button>
      </CardActions>
      
    </Card>
    
<div>
  

  
</div></>
  );
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
};

const styles = {
  card: {
    minWidth: 275,
    marginBottom: '1em',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actions: {
    width: '100%',
    textAlign: 'right',
  },
  button: {
    marginLeft: 'auto',
  },
  progress: {
    margin: 'auto',
    display: 'block',
  },
};

export default withStyles(styles)(Component);
