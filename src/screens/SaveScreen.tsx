import { useEffect, useRef, useState, useContext } from 'react';

import { Box, Chip, CircularProgress, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Theme, Toolbar, useTheme } from '@mui/material';
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import DOMPurify from 'dompurify';

import { toolbar } from '../helpers';
import { Window } from '../components';
import { RecipeContextTheMealDB } from '../context/recipesTheMealDBApi';
import { RecipeContextMyOwnChefBook } from '../context/recipesMyOwnChefBookApi';
import { useForm } from '../hooks';
import { useToast } from '../hooks';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const getStyles = (name: string, personName: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export const SaveScreen = () => {

  const theme = useTheme();
  const { categories, getCategories } = useContext(RecipeContextTheMealDB)
  const { postRecipes } = useContext(RecipeContextMyOwnChefBook)
  const selectRef = useRef<HTMLDivElement>(null);
  const boxToPreviewRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState(0);
  const [someHTML, setSomeHTML] = useState('');
  const showToast = useToast();

  const updateMenuWidth = () => {
    if (selectRef.current?.offsetWidth !== undefined) {
      const width = selectRef.current?.offsetWidth;
      setMenuWidth(width);
    }
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: menuWidth,
        minWidth: 250,

      },
    },
  };

  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbar
    }
  });

  const { onInputChange, onSelectChipChange, titleRecipe, selectChipCategory, resetForm } = useForm({
    titleRecipe: '',
    selectChipCategory: []
  });

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

  const cleanBoard = () => {
    quill.clipboard.dangerouslyPasteHTML('');
    resetForm();
  }

  const validateAndSubmit = () => {
    if (titleRecipe.trim() === undefined || titleRecipe.trim() === '') {
      return showToast({ icon: 'error', title: 'Error...', html: `The field <b>"title"</b> recipe must be completed.` });
    }
    if (!selectChipCategory || selectChipCategory.length === 0) {
      return showToast({ icon: 'error', title: 'Error...', html: 'The field <strong>"category"</strong> must be completed.' });
    }
    postRecipes(titleRecipe, someHTML, selectChipCategory, cleanBoard)
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <>
      <Grid container flexDirection={'row'}>
        <Grid item xs={12} sm={6}>
          <Window
            height='calc(100vh - 190px)'
            title='Design:'
            titleButton='Save this'
            onClickButton={() => validateAndSubmit()}
          >
            <Toolbar sx={{ mt: 2, display: 'flex' }}>
              <Grid container flexDirection={'row'} spacing={1}>
                <Grid item xs={12} sm={12} md={3} sx={{ mt: { xs: 2, sm: 2, md: 0 } }}>
                  <TextField
                    required
                    name='titleRecipe'
                    value={titleRecipe}
                    onChange={onInputChange}
                    label="Title's recipe"
                    placeholder='Creepes'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={9} sx={{ display: 'flex', justifyContent: { xs: 'space-evenly', md: 'flex-end' }, mb: { xs: 3, sm: 3, md: 0 } }}>
                  <FormControl sx={{ minWidth: { xs: '105px', sm: '105px', md: '125px' } }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                      multiple
                      ref={selectRef}
                      name='selectChipCategory'
                      value={selectChipCategory}
                      onChange={onSelectChipChange}
                      input={<OutlinedInput label="Category" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5, m: -0.6 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value}
                              sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {
                        (categories.length !== 0)
                          ? categories.map(({ strCategory }) => (
                            <MenuItem
                              key={strCategory}
                              value={strCategory}
                              style={getStyles(strCategory, selectChipCategory, theme)}
                              onClick={updateMenuWidth}
                            >
                              {strCategory}
                            </MenuItem>
                          ))
                          : (
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                              <CircularProgress />
                            </Box>
                          )
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
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
            titleButton='clear this'
            onClickButton={() => { cleanBoard(); }}
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

      </Grid >
    </>
  )
}

export default SaveScreen;
