import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import toolbar from '../helpers/toolbar';
import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { Window } from '../components';

export const SaveScreen = () => {
  const theme = useTheme();
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbar
    }
  });

  const boxToPreviewRef = useRef<HTMLDivElement>(null);
  const [someHTML, setSomeHTML] = useState('');
  const [category, setCategory] = useState('');


  /* 
  
import React, { useRef, useEffect, useState } from 'react';

export default function Sample() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [someHTML,] = useState("some <b>bold</b>");

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.innerHTML = someHTML;
    }
  }, [spanRef.current, someHTML]);

  return <div>
    my custom text follows<br />
    <span ref={spanRef} />
  </div>
}

  */


  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  // const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  // const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  // if (greaterThanMid) {
  //   console.log("Arriba de MD");
  // } else if (smallToMid) {
  //   console.log("Entre SM y MD");
  // } else if (lessThanSmall) {
  //   console.log("Abajo de SM");
  // }


  useEffect(() => {
    const quillFunction = () => {
      const Html = DOMPurify.sanitize(quill.root.innerHTML);
      // console.log(Html)
      setSomeHTML(Html); // Get innerHTML using quill
      localStorage.setItem('quillText', Html)
      // console.log(quill.getText()); // Get text only
      // console.log(quill.getContents()); // Get delta contents
    }
    // quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
    // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
    if (quill) {
      quill.on('text-change', quillFunction);
    }
    return () => {
      if (quill) {
        quill.off('text-change', quillFunction);
      }
    };
  }, [quill]);

  useEffect(() => {
    if (quill && !!localStorage.getItem('quillText')) {
      const sanitized = localStorage.getItem('quillText')
      const html = DOMPurify.sanitize(sanitized!)
      quill.clipboard.dangerouslyPasteHTML(html);
    }
  }, [quill]);

  useEffect(() => {
    if (boxToPreviewRef.current) {
      boxToPreviewRef.current.innerHTML = someHTML;
    }
  }, [someHTML]);

  return (
    <Grid container flexDirection={'row'}>
      <Grid
        item
        xs={12}
        sm={6}
      // order={{ xs: 2, sm: 1 }}
      >

        <Window
          height='calc(100vh - 190px)'
          title='Design:'
          button
          titleButton='Save this'
        >
          <Toolbar sx={{ mt: 2, justifyContent: 'space-between', display: 'flex' }}>
            <TextField
              required
              id="outlined-required"
              label="Title's recipe"
              placeholder='Creepes'
            />
            <FormControl sx={{ width: 250 }}>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>Rapida</MenuItem>
                <MenuItem value={20}>Postre</MenuItem>
                <MenuItem value={30}>Ensalada</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>

          <Box sx={{
            height: '100%',
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            px: 3,
            pt: 1,
          }}>
            <Box ref={quillRef} sx={{
              height: '100%',
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              fontSize: 16,
              mb: 3,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
            />
          </Box>
        </Window>
      </Grid>


      <Grid item xs={12} sm={6}>
        <Window
          height='calc(100vh - 190px)'
          title='Preview:'
          button
          titleButton='clear this'
        >
          <Box sx={{
            height: '100%',
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}>
            <Box className='ql-editor' ref={boxToPreviewRef} sx={{ mb: 3, }} />
          </Box>
        </Window>
      </Grid>

    </Grid>
  )
}

export default SaveScreen;
