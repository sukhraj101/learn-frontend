import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, Box } from '@mui/material';

const EditableContent = ({ initialContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [editedContent, setEditedContent] = useState(initialContent);

  const handleSave = () => {
    setContent(editedContent);
    setIsEditing(false);
    // Optionally: Send `editedContent` to a server
  };

  return (
    <Box>
      {!isEditing ? (
        <>
          <Typography
            component="div"
            variant="body2"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <Button
            variant="bounded"
            color="primary"
            size="xs"
            sx={{ marginTop: 1.25 }}
            onClick={() => setIsEditing(true)}
            aria-label="Suggest edit"
          >
            Suggest edit
          </Button>
        </>
      ) : (
        <>
          <TextField
            multiline
            fullWidth
            minRows={4}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            variant="outlined"
            sx={{ marginTop: 1 }}
            aria-label="Edit content"
          />

          <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
            <Button
              variant="bounded"
              size="small"
              onClick={handleSave}
              aria-label="Save changes"
            >
              Save
            </Button>
            <Button
              variant="bounded"
              size="small"
              onClick={() => {
                setEditedContent(content);
                setIsEditing(false);
              }}
              aria-label="Cancel edit"
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

EditableContent.propTypes = {
    initialContent: PropTypes.string.isRequired,
};

export default EditableContent;